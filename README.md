# MyEco SMP Season 2 - Official Website Template 🌲🪙

Halo! Selamat datang di repositori website resmi **MyEco SMP Season 2**. Website ini dirancang khusus untuk menjadi landing page resmi server Minecraft bertema *Survival Economy*, *Village*, dan *Community*. 

Dengan desain modern, responsif, dan animasi halus menggunakan Framer Motion, website ini siap merepresentasikan server Minecraft Anda secara profesional. Seluruh data konfigurasi server juga telah dipusatkan, membuat pemeliharaan dan perubahan informasi menjadi sangat mudah bahkan bagi pemula sekalipun.

---

## 📸 Preview Tampilan

Berikut adalah aset utama yang digunakan untuk membangun atmosfer visual website ini:

*   **Logo Utama Server:**
    ![MyEco SMP Logo](/logo.png)
*   **Hero Background Cinematic:**
    ![Hero Background](/hero-bg.webp)

---

## 🛠️ Teknologi yang Digunakan

Website ini dibangun menggunakan teknologi web modern berkinerja tinggi untuk memastikan skor Lighthouse yang optimal (Performance, Accessibility, Best Practices, & SEO ≥95%):

1.  **React 19** – Library UI terpopuler untuk pembuatan komponen reaktif.
2.  **TypeScript** – Menjamin keamanan tipe data (type-safety) dan meminimalkan bug.
3.  **Vite** – Build tool super cepat untuk pengembangan frontend lokal yang efisien.
4.  **Tailwind CSS v4** – Utilitas CSS modern untuk desain visual presisi tanpa bloatware.
5.  **Framer Motion** – Library animasi standar industri untuk interaksi mikro yang halus dan elegan.
6.  **Lucide React** – Set ikon vektor premium yang konsisten dan tajam.

---

## 📂 Struktur Folder Proyek

Berikut adalah gambaran ringkas susunan file di dalam proyek ini:

```text
/
├── config/              # Folder konfigurasi website terpusat
│   └── site.ts          # Berisi seluruh data IP, Port, Rank, dan Kontak WA
├── public/              # Folder penyimpanan aset statis
│   ├── logo.png         # Logo utama server (1:1)
│   ├── hero-bg.webp     # Banner cinematic atas (16:9)
│   ├── background.webp  # Tekstur latar belakang bodi halaman (16:9)
│   ├── og-image.webp    # Banner SEO media sosial & Discord (16:9)
│   ├── favicon.ico      # Ikon tab browser
│   ├── sitemap.xml      # Struktur SEO mesin pencari
│   ├── robots.txt       # Aturan crawling Google Bot
│   └── manifest.webmanifest # Definisi Progressive Web App (PWA)
├── src/
│   ├── components/      # Komponen modular UI (Header, Hero, Features, Ranks, dll.)
│   ├── App.tsx          # Koordinator utama komponen halaman
│   ├── index.css        # Impor stylesheet Tailwind & Desain Sistem Font
│   └── main.tsx         # Entry point aplikasi React
├── package.json         # Daftar dependensi & script build
└── tsconfig.json        # Konfigurasi TypeScript compiler
```

---

## 🖼️ Asset Preview (Panduan File Gambar)

Pemilik server dapat langsung mengganti file gambar di folder `public/` dengan file kustom Anda sendiri menggunakan nama dan format yang sama:

```text
public/
├── logo.png             <-- Logo bulat/kotak server Anda (Format PNG transparan, 512x512px)
├── hero-bg.webp         <-- Gambar pemandangan Minecraft estetik untuk latar atas (1920x1080px)
├── background.webp      <-- Tekstur gelap samar untuk background bodi situs (1920x1080px)
├── og-image.webp        <-- Gambar banner yang muncul saat link website di-share ke Discord/WA
├── favicon.ico          <-- Ikon kecil di pojok tab browser (Format .ico atau .png 32x32px)
└── manifest.webmanifest <-- File setelan PWA (Nama aplikasi, warna tema, dsb)
```

---

## ⚙️ Cara Mengubah Informasi Server & Data Rank

Semua data penting, harga, benefit rank, nomor WhatsApp, IP, dan Port dipusatkan di file **`src/config/site.ts`** (diimpor sebagai `config/site.ts`). Anda **tidak perlu** mengedit file komponen HTML/React satu per satu.

Buka file `src/config/site.ts`, lalu sesuaikan nilai-nilai berikut:

```typescript
export const siteConfig = {
  name: "MyEco SMP Season 2",
  domain: "myecosmp.com",
  ipJava: "play.myecosmp.com",
  ipBedrock: "pe.myecosmp.com",
  portJava: 25565,
  portBedrock: 19132,
  version: "1.20.x - 1.21.x",
  discord: "https://discord.gg/myecosmp",
  adminWhatsapp: "https://wa.me/628388567246...",
  adminNumber: "08388567246",
  
  // Daftarkan harga rank & benefit asli di sini
  ranks: [
    {
      name: "IRON",
      price: "Rp 15.000",
      duration: "Lifetime",
      benefits: [
        "Prefix [IRON] eksklusif di dalam game",
        "warna chat hijau terang...",
        // dst
      ]
    },
    // Rank GOLD, DIAMOND, dan VIP bisa diubah dengan pola yang sama
  ]
};
```

---

## 🚀 Cara Menjalankan Project secara Lokal

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah mudah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone <url-repositori-anda>
    ```
2.  **Instal seluruh dependensi (Node.js diperlukan):**
    ```bash
    npm install
    ```
3.  **Jalankan dev server lokal:**
    ```bash
    npm run dev
    ```
4.  Buka browser Anda dan akses `http://localhost:3000`.

Untuk membuat versi produksi (siap hosting):
```bash
npm run build
```

---

## ☁️ Cara Deploy ke Vercel

Situs ini menggunakan arsitektur Single Page Application (SPA) berbasis React & Vite statis, sehingga sangat cocok dideploy di **Vercel** secara gratis dan instan:

1.  Daftar atau masuk ke akun [Vercel](https://vercel.com/).
2.  Hubungkan akun GitHub Anda ke Vercel.
3.  Pilih tombol **"Add New"** > **"Project"**, lalu pilih repositori proyek website MyEco SMP ini.
4.  Vercel akan mendeteksi **Vite** secara otomatis. Biarkan semua setelan default (Build Command: `npm run build`, Output Directory: `dist`).
5.  Klik tombol **Deploy**. Selesai! Website Anda akan aktif dalam waktu kurang dari 1 menit.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT**. Anda bebas memodifikasi, mendistribusikan, dan menggunakan template ini untuk server Minecraft pribadi maupun komersial Anda.

---

## 🎖️ Credits

*   **Developer Utama:** [RAN DEV](https://wa.me/62895602592430) (WhatsApp: 0895602592430)
*   **Desain Konsep:** MyEco SMP Staff & Community.

---

Terima kasih sudah menggunakan project ini. Semoga website ini dapat membantu komunitas server Minecraft berkembang dengan tampilan yang lebih profesional. Silakan sesuaikan kembali isi `config/site.ts` dan aset di folder `public/` agar website benar-benar mencerminkan identitas unik server Anda! Selamat bermain dan semoga server makin ramai! 🎮✨
