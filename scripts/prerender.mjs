import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST_DIR = fileURLToPath(new URL('../dist', import.meta.url));

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

function startStaticServer() {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? '/', 'http://localhost');
      let pathname = decodeURIComponent(url.pathname);
      if (pathname === '/') pathname = '/index.html';

      const filePath = normalize(join(DIST_DIR, pathname));
      if (!filePath.startsWith(DIST_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      const data = await readFile(filePath);
      res.writeHead(200, {
        'Content-Type': MIME_TYPES[extname(filePath).toLowerCase()] ?? 'application/octet-stream',
      });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function prerender() {
  const { default: puppeteer } = await import('puppeteer');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  let server;

  try {
    server = await startStaticServer();
    const { port } = server.address();

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    await page.goto(`http://127.0.0.1:${port}/`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    await page.waitForFunction(
      () => document.querySelectorAll('#root main section').length >= 5,
      { timeout: 30000 }
    );
    await page.waitForFunction(
      () => document.getElementById('root')?.textContent?.includes('BOBY') ?? false,
      { timeout: 30000 }
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const rendered = await page.evaluate(() => document.getElementById('root')?.innerHTML ?? '');
    if (!rendered.trim()) {
      throw new Error('Prerendered markup is empty');
    }

    const indexPath = join(DIST_DIR, 'index.html');
    const html = await readFile(indexPath, 'utf8');
    const marker = '<div id="root"></div>';

    if (!html.includes(marker)) {
      throw new Error('Root mounting point not found in dist/index.html');
    }

    await writeFile(
      indexPath,
      html.replace(marker, `<div id="root">${rendered}</div>`),
      'utf8'
    );

    console.log(
      `[prerender] OK — dist/index.html now ships ${(rendered.length / 1024).toFixed(1)} kB of static markup`
    );
  } finally {
    if (server) server.close();
    await browser.close();
  }
}

prerender().catch((error) => {
  console.warn(`[prerender] skipped (${error.message}). The SPA build is still valid.`);
});
