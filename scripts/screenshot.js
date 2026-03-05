import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Output directory
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'assets', 'projects');

// Pastikan output directory ada
async function ensureOutputDir() {
  try {
    await fs.access(OUTPUT_DIR);
  } catch {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }
}

// Ambil screenshot untuk satu website
async function takeScreenshot(website, browser, index, total) {
  const { name, url, filename, width, height, delay } = website;
  const outputPath = path.join(OUTPUT_DIR, filename);
  
  console.log(`[${index + 1}/${total}] Taking screenshot of ${name} (${url})...`);
  
  try {
    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width, height });
    
    // Set user agent untuk menghindari blocking
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Navigasi ke URL
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Tunggu delay untuk memastikan page fully loaded
    if (delay > 0) {
      console.log(`  Waiting ${delay}ms for page to fully load...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    // Ambil screenshot
    await page.screenshot({ 
      path: outputPath,
      type: 'jpeg',
      quality: 80,
      fullPage: false
    });
    
    await page.close();
    
    // Verifikasi file berhasil dibuat
    const stats = await fs.stat(outputPath);
    console.log(`  ✓ Screenshot saved: ${filename} (${Math.round(stats.size / 1024)} KB)`);
    
    return { success: true, website: name, file: filename };
    
  } catch (error) {
    console.error(`  ✗ Failed to screenshot ${name}:`, error.message);
    return { success: false, website: name, error: error.message };
  }
}

// Main function
async function main() {
  // Load websites configuration
  const WEBSITES_CONFIG = JSON.parse(
    await fs.readFile(new URL('./websites.json', import.meta.url), 'utf-8')
  );
  
  console.log('🚀 Starting automated screenshot capture...');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  console.log(`📊 Total websites: ${WEBSITES_CONFIG.length}`);
  console.log('─'.repeat(50));
  
  // Pastikan output directory ada
  await ensureOutputDir();
  
  let browser;
  const results = [];
  
  try {
    // Launch browser
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu'
      ]
    });
    
    console.log('Browser launched successfully!\n');
    
    // Process each website
    for (let i = 0; i < WEBSITES_CONFIG.length; i++) {
      const website = WEBSITES_CONFIG[i];
      const result = await takeScreenshot(website, browser, i, WEBSITES_CONFIG.length);
      results.push(result);
      
      // Delay kecil antara screenshot untuk mengurangi load
      if (i < WEBSITES_CONFIG.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Summary
    console.log('\n' + '─'.repeat(50));
    console.log('📋 SCREENSHOT SUMMARY');
    console.log('─'.repeat(50));
    
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log(`✅ Successful: ${successful}/${WEBSITES_CONFIG.length}`);
    console.log(`❌ Failed: ${failed}/${WEBSITES_CONFIG.length}`);
    
    if (failed > 0) {
      console.log('\nFailed websites:');
      results.filter(r => !r.success).forEach(r => {
        console.log(`  - ${r.website}: ${r.error}`);
      });
    }
    
    console.log('\n🎉 Screenshot process completed!');
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
  } finally {
    // Close browser
    if (browser) {
      await browser.close();
      console.log('Browser closed.');
    }
  }
  
  return results;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { main };
