# Portfolio Update - Proyek Baru

## 📋 Perubahan yang Dilakukan

### 1. **Data Proyek Diperbarui**
File `src/data/projects.ts` telah diupdate dengan 7 proyek baru menggantikan proyek contoh:

#### Daftar Proyek Baru:
1. **AppHave - Platform Aplikasi Modern**
   - URL: https://apphave.fun/
   - Teknologi: React, TypeScript, Tailwind CSS, Vite
   - Kategori: Web, UI

2. **InstaPure - Aplikasi Konten Visual**
   - URL: https://instapure.fun/
   - Teknologi: Next.js, TypeScript, Framer Motion, Cloudinary
   - Kategori: Web, UI

3. **Kamapa - Portal Informasi Digital**
   - URL: https://kamapa.online/
   - Teknologi: React, Node.js, MongoDB, Express
   - Kategori: Web

4. **Yayasan Amal - Platform Donasi Online**
   - URL: https://yayasanamal.netlify.app/
   - Teknologi: Next.js, TypeScript, Stripe, PostgreSQL
   - Kategori: Web

5. **HoodaGoods - E-commerce Modern**
   - URL: https://hoodagoods.netlify.app/
   - Teknologi: React, Redux, Firebase, Stripe
   - Kategori: Web

6. **Terrapurun - Website Bisnis Profesional**
   - URL: https://terrapurun.online/
   - Teknologi: Vue.js, Nuxt.js, Tailwind CSS, Netlify
   - Kategori: Web, UI

7. **KPHL Kapuas Kahayan - Website Organisasi**
   - URL: https://kphlkapuaskahayan.netlify.app/
   - Teknologi: React, TypeScript, Contentful, Vercel
   - Kategori: Web

### 2. **Thumbnail Proyek**
- Folder `public/assets/projects/` telah dibuat
- 7 file thumbnail placeholder telah ditambahkan
- Thumbnail menggunakan gambar dari Pexels sebagai placeholder
- Path: `/assets/projects/placeholder1.jpg` sampai `placeholder7.jpg`

### 3. **Struktur File**
```
public/
├── assets/
│   └── projects/
│       ├── placeholder1.jpg
│       ├── placeholder2.jpg
│       ├── placeholder3.jpg
│       ├── placeholder4.jpg
│       ├── placeholder5.jpg
│       ├── placeholder6.jpg
│       └── placeholder7.jpg
```

## 🚀 Cara Menjalankan

1. **Development Server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di http://localhost:5173

2. **Build untuk Production:**
   ```bash
   npm run build
   ```

3. **Preview Build:**
   ```bash
   npm run preview
   ```

## 🔧 Customization

### Mengganti Thumbnail
Untuk mengganti thumbnail dengan screenshot asli:
1. Ambil screenshot dari setiap website
2. Simpan di `public/assets/projects/` dengan nama:
   - `apphave-thumbnail.jpg`
   - `instapure-thumbnail.jpg`
   - dll.
3. Update path di file `projects.ts`

### Menambahkan GitHub Repository
Jika ada repository GitHub, tambahkan field `githubUrl` di setiap proyek:
```typescript
githubUrl: 'https://github.com/username/repository'
```

## ✅ Testing
- Build berhasil tanpa error
- Thumbnail tersedia dan valid
- Semua link demo mengarah ke website yang benar

## 📝 Catatan
- Thumbnail saat ini menggunakan placeholder dari Pexels
- Teknologi diasumsikan berdasarkan stack modern umum
- Anda bisa update deskripsi dan teknologi sesuai kebutuhan

---

**Portfolio siap digunakan!** 🎉