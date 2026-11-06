# Website Marketing Furniture

Website company profile dan katalog untuk perusahaan mebel kayu, dibuat berdasarkan
[PRD-Website-Marketing-Furniture.md](PRD-Website-Marketing-Furniture.md).
Dibangun dengan React, TypeScript, Vite, Tailwind CSS, dan React Router.

> **Seluruh data saat ini adalah data contoh.** Nama "Mebel Contoh", kontak, produk, proyek,
> dan foto bukan data perusahaan sebenarnya. Lihat [Sebelum dipublikasikan](#sebelum-dipublikasikan).

## Instalasi

Butuh Node.js 20.19+ atau 22.12+.

```bash
npm install
```

## Development

```bash
npm run dev         # server lokal di http://localhost:5173
npm run typecheck   # pemeriksaan TypeScript
npm run build       # typecheck + build produksi ke folder dist/
npm run preview     # menjalankan hasil build di http://localhost:4173
```

Cara termudah di Windows: klik dua kali `jalankan-website.bat`.

Website dijalankan lewat perintah di atas, bukan lewat Apache XAMPP. Membuka
`http://localhost/Contoh%20web/` hanya menghasilkan halaman kosong.

Jika PowerShell menampilkan `running scripts is disabled on this system`, pakai `npm.cmd run dev`.

## Konfigurasi

Semua konten ada di `src/data/`, sehingga komponen tidak perlu diubah.

| File | Isi |
| --- | --- |
| `company.ts` | Nama, profil, visi misi, nomor WhatsApp, telepon, email, jam operasional, social media |
| `locations.ts` | Kantor, pabrik, showroom, dan data peta |
| `categories.ts` | Kategori produk |
| `products.ts` | Produk |
| `services.ts` | Layanan |
| `projects.ts` | Portofolio |
| `gallery.ts` | Foto galeri |
| `content.ts` | Keunggulan, tahapan produksi, testimoni |
| `seo.ts` | Judul dan deskripsi tiap halaman |

### WhatsApp

Isi `whatsappNumber` di `company.ts` dengan kode negara, tanpa `+`, spasi, atau tanda hubung
(contoh `6281234567890`). Semua tombol membaca nilai ini. Isi pesan otomatis ada di `src/lib/whatsapp.ts`.

### Lokasi dan Google Maps

Isi `address` dan `mapQuery` di `locations.ts`. `mapQuery` berupa alamat lengkap atau koordinat `"lat,lng"`.
Selama `mapQuery` kosong, peta tampil sebagai "belum tersedia" dan tombol View Location serta
Get Directions nonaktif, supaya tidak ada lokasi yang dikarang.

Untuk metode resmi, salin URL dari Google Maps > Bagikan > Sematkan peta ke field `embedUrl`.

### Produk

Field opsional yang kosong (`sku`, `price`, `material`, `dimensions`, `colors`, `finishing`,
`customOptions`, `highlights`) otomatis disembunyikan. Harga hanya tampil jika `price` diisi.

### Foto

Foto di `public/images/` adalah **foto stok CC0** (daftar sumbernya di [SUMBER-FOTO.md](SUMBER-FOTO.md)) yang
menampilkan furniture milik pihak lain. Foto ini hanya contoh tampilan dan wajib diganti sebelum website dipublikasikan.

Ganti dengan foto asli berformat WebP atau AVIF, sudah dikompres, dengan lebar sekitar 1000 px untuk produk dan
2000 px untuk hero. Lalu perbarui path, `alt`, `width`, dan `height` di file data. Foto hero ada di
`src/components/home/Hero.tsx`, dan path preload-nya di `src/lib/seo.ts`. Foto header tiap halaman ada di
`src/data/seo.ts`. Label "Foto contoh" hilang otomatis saat `isPlaceholderData` diubah menjadi `false`.

Logo diambil dari `public/favicon.svg`. Gambar pratinjau tautan ada di `public/images/og/og-default.jpg`
(1200 × 630 px).

### Testimoni

Array `testimonials` di `content.ts` sengaja kosong. Bagian testimoni di homepage otomatis tampil
setelah diisi ulasan asli yang sudah mendapat izin.

### Analytics (opsional)

Klik WhatsApp, telepon, email, lokasi, dan detail produk sudah dikirim lewat `src/lib/analytics.ts`.
Event mulai tercatat setelah tag Google Analytics 4 dipasang di `index.html`.
Pastikan pemasangannya mematuhi ketentuan privasi yang berlaku.

## Deployment ke Vercel

1. Push project ke GitHub, GitLab, atau Bitbucket.
2. Impor repository di Vercel. Pengaturan build sudah ada di `vercel.json`.
3. Tambahkan environment variable `VITE_SITE_URL` berisi domain produksi, misalnya `https://www.domain-anda.com`.
4. Deploy, lalu hubungkan domain dan pastikan HTTPS aktif.

Saat build, setiap halaman mendapat file HTML dengan metadata sendiri, dan `sitemap.xml` serta `robots.txt`
dibuat otomatis dari data produk. Keduanya tidak perlu diedit manual.

## Sebelum dipublikasikan

- [ ] Ganti seluruh data di `src/data/` dengan data resmi.
- [ ] Isi nomor WhatsApp, telepon, email, dan jam operasional yang benar.
- [ ] Isi alamat dan `mapQuery`, lalu uji View Location dan Get Directions.
- [ ] Ganti seluruh foto stok, logo, dan gambar pratinjau tautan dengan milik perusahaan.
- [ ] Pastikan klaim di `content.ts` sesuai kondisi perusahaan.
- [ ] Ubah `isPlaceholderData` menjadi `false` di `company.ts`. Ini menghapus banner contoh dan mengaktifkan schema SEO.
- [ ] Set `VITE_SITE_URL`, deploy, lalu uji Lighthouse pada URL produksi dan perangkat mobile.
