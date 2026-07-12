# 🌟 MyEco SMP Season 2 - Website Portal Resmi

Website portal Minecraft Server modern, cepat, dan interaktif yang dibangun menggunakan **React 19**, **Vite**, **TypeScript**, dan **Tailwind CSS**. Website ini mengadopsi arsitektur dynamic data fetching tanpa data hardcoded dan performa super responsif yang dioptimalkan untuk perangkat mobile dan desktop.

## 🚀 Fitur Utama & Keunggulan Teknis

### 1. Dynamic Data Architecture (Zero Hardcoded)
Seluruh informasi developer, kontak, portofolio, dan media sosial ditarik secara real-time dari endpoint eksternal:
`https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json`
Perubahan pada file JSON di atas akan langsung tercermin secara otomatis pada website tanpa memerlukan build ulang atau deployment ulang!

### 2. Multi-Page SPA System (Anti-Lag & Rendah Memori)
Untuk mencegah penurunan performa pada perangkat HP kentang, visual rendering dipecah menjadi beberapa seksi halaman (SPA). Komponen halaman yang tidak aktif dilepas seluruhnya dari DOM pohon rendering, memastikan penghematan RAM dan GPU secara maksimal.

### 3. OpenGraph Dinamis & SEO Maksimal
Dilengkapi metadata SEO, OpenGraph tags, dan Twitter Cards yang dikonfigurasi secara dinamis berdasarkan data API JSON. Preview link di WhatsApp atau Discord akan menampilkan logo serta thumbnail yang proporsional secara instan.

### 4. Desain Mobile-First & Sticky Header
Antarmuka pengguna premium menggunakan perpaduan warna hutan malam gelap (*dark forest*), hijau zamrud (*emerald*), dan aksen emas (*gold*). Dilengkapi navigasi laci (Navigation Drawer) pada perangkat mobile yang merangkum seluruh tombol kontak developer secara rapi tanpa mengganggu hierarki informasi server utama.

---

## 🛠️ Panduan Pengembangan

### Prasyarat
Pastikan Anda memiliki [Node.js](https://nodejs.org/) terinstal di sistem Anda.

### Menjalankan Mode Development
```bash
npm run dev
```

### Membangun Kode Produksi
```bash
npm run build
```

---

*Website ini dikembangkan secara profesional dan dirilis di bawah lisensi resmi.*
