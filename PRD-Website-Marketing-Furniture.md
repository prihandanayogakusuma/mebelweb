# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# Website Marketing / Company Profile Perusahaan Mebel dan Furniture Kayu

**Nama Proyek:** Website Marketing Furniture\
**Jenis Produk:** Landing Page / Company Profile / Product Showcase\
**Status Dokumen:** Draft Siap Implementasi\
**Frontend:** React.js + TypeScript + Vite\
**Styling:** Tailwind CSS\
**Hosting:** Vercel\
**Integrasi Lokasi:** Google Maps\
**Konversi Utama:** WhatsApp / Kontak Penjualan

------------------------------------------------------------------------

## 1. Ringkasan Proyek

Website ini merupakan website marketing untuk perusahaan yang bergerak
di bidang pembuatan, produksi, dan penjualan mebel atau furniture
berbahan kayu, seperti kursi, meja, lemari, tempat tidur, dan produk
furniture lainnya.

Website berfungsi sebagai media untuk: - Memamerkan produk dan jasa
perusahaan. - Memperkenalkan profil, pengalaman, dan kemampuan produksi
perusahaan. - Membangun kepercayaan calon pembeli. - Mempromosikan
produk unggulan. - Mendatangkan calon pelanggan. - Mengarahkan
pengunjung untuk menghubungi perusahaan melalui WhatsApp atau kanal
kontak penjualan. - Menampilkan lokasi kantor dan/atau pabrik melalui
Google Maps.

Website harus berorientasi pada pemasaran dan penjualan
(*conversion-focused*), bukan aplikasi operasional internal perusahaan.

## 2. Tujuan Bisnis

1.  Meningkatkan visibilitas dan citra profesional perusahaan secara
    online.
2.  Memudahkan calon pelanggan menemukan dan melihat produk furniture.
3.  Menyampaikan keunggulan produk, material, kualitas, dan proses
    pengerjaan.
4.  Mengubah pengunjung website menjadi prospek atau calon pembeli.
5.  Mempermudah pelanggan menghubungi sales melalui WhatsApp.
6.  Memudahkan calon pembeli menemukan lokasi kantor atau pabrik.

### Indikator Keberhasilan

-   Pengunjung dapat menemukan produk dengan mudah.
-   Tombol WhatsApp tersedia pada area strategis dan berfungsi.
-   Pesan WhatsApp otomatis memuat nama produk jika berasal dari halaman
    detail produk.
-   Informasi perusahaan, alamat, dan kontak mudah ditemukan.
-   Website responsif dan cepat dimuat.
-   Pengunjung dapat membuka lokasi perusahaan di Google Maps dan
    meminta petunjuk arah.

## 3. Target Pengguna

  Target Pengguna            Kebutuhan
  -------------------------- --------------------------------------
  Pembeli individu           Mencari furniture untuk rumah
  Pemilik toko / reseller    Mencari pemasok furniture
  Distributor                Menjalin kerja sama distribusi
  Hotel dan restoran         Pengadaan meja, kursi, dan furniture
  Kontraktor / procurement   Pengadaan furniture proyek
  Desainer interior          Mencari produsen furniture custom
  Perusahaan                 Pengadaan furniture kantor

## 4. Ruang Lingkup Proyek

### 4.1 Termasuk dalam Scope

-   Website company profile.
-   Landing page pemasaran.
-   Katalog dan kategori produk.
-   Halaman detail produk.
-   Halaman layanan.
-   Halaman portofolio proyek.
-   Galeri foto.
-   Informasi kontak perusahaan.
-   Integrasi WhatsApp.
-   Google Maps Embed.
-   Tombol View Location dan Get Directions.
-   Informasi lokasi kantor dan/atau pabrik.
-   SEO dasar.
-   Responsive design.
-   Optimasi performa dan gambar.
-   Deployment ke Vercel.

### 4.2 Tidak Termasuk dalam Scope

Fitur berikut tidak diperlukan untuk versi proyek ini: - Shopping
cart. - Checkout online. - Payment gateway. - Manajemen stok atau
inventory. - ERP. - CRM. - Sistem akuntansi. - Sistem produksi
internal. - Sistem pemesanan dan pelacakan pesanan. - Customer portal. -
Admin dashboard atau CMS kompleks. - Login pelanggan. - Manajemen
karyawan.

Konten produk dapat dikelola melalui file data TypeScript/JSON dalam
source code untuk versi awal. Integrasi CMS atau database dapat
dipertimbangkan sebagai pengembangan terpisah apabila perusahaan
membutuhkannya.

## 5. Teknologi yang Digunakan

  Teknologi                Fungsi
  ------------------------ ---------------------------------
  React.js                 Membangun antarmuka website
  TypeScript               Type safety dan struktur kode
  Vite                     Development server dan build
  Tailwind CSS             Styling dan responsive layout
  React Router             Navigasi antarhalaman
  Lucide React             Ikon
  Framer Motion            Animasi ringan jika diperlukan
  Vercel                   Hosting dan deployment
  Google Maps Embed        Menampilkan lokasi perusahaan
  WhatsApp Click to Chat   Mengarahkan pengunjung ke sales

Gunakan versi stabil yang kompatibel pada saat implementasi. Hindari
menambahkan dependency yang tidak diperlukan.

## 6. Struktur Halaman (Sitemap)

``` text
/
├── Home
├── About Us
├── Products
│   ├── Product Categories
│   └── Product Detail
├── Services
├── Our Projects
├── Gallery
└── Contact Us
```

Navigasi utama harus sederhana, jelas, dan konsisten pada semua halaman.

## 7. Persyaratan Fitur

### 7.1 Navbar

Elemen: - Logo perusahaan. - Home. - About Us. - Products. - Services. -
Projects / Gallery. - Contact. - Tombol CTA WhatsApp.

Persyaratan: - Navbar responsif. - Menu mobile menggunakan hamburger
menu. - Navigasi menuju section atau halaman yang tepat. - CTA WhatsApp
terlihat jelas. - Navbar dapat dibuat sticky jika tidak mengganggu
pengalaman pengguna.

### 7.2 Homepage / Landing Page

Homepage adalah halaman utama yang paling berorientasi pada konversi.

Urutan section yang direkomendasikan:

1.  **Hero Section**
    -   Foto utama furniture atau hasil produksi berkualitas tinggi.
    -   Headline yang menjelaskan nilai utama perusahaan.
    -   Deskripsi singkat.
    -   CTA "Explore Products".
    -   CTA "Chat via WhatsApp".
2.  **Company Introduction**
    -   Ringkasan profil perusahaan.
    -   Pengalaman atau kapasitas perusahaan jika datanya tersedia.
    -   Foto workshop, pabrik, atau produk.
    -   Link ke halaman About Us.
3.  **Product Categories**
    -   Kategori produk dengan foto.
    -   Nama dan deskripsi singkat.
    -   Link untuk melihat produk pada kategori terkait.
4.  **Featured Products**
    -   Produk unggulan.
    -   Foto, nama, ringkasan, dan CTA.
    -   CTA menuju detail produk atau WhatsApp.
5.  **Why Choose Us**
    -   Kualitas material.
    -   Keahlian pengerjaan.
    -   Pilihan desain.
    -   Kemampuan custom.
    -   Quality control.
    -   Ketepatan pengerjaan atau pengiriman jika dapat dibuktikan.
6.  **Services**
    -   Produksi furniture.
    -   Custom furniture.
    -   Pengadaan furniture proyek.
    -   Layanan lain sesuai bisnis sebenarnya.
7.  **Manufacturing Process**
    -   Pemilihan material.
    -   Pemrosesan kayu.
    -   Pemotongan dan pembentukan.
    -   Perakitan.
    -   Finishing.
    -   Quality control.
8.  **Portfolio / Projects**
    -   Foto hasil pekerjaan.
    -   Jenis proyek dan deskripsi singkat.
    -   Link menuju halaman proyek.
9.  **Testimonials**
    -   Ulasan pelanggan yang benar-benar tersedia dan telah mendapat
        izin untuk ditampilkan.
    -   Jangan membuat testimoni fiktif.
10. **Location Preview**
    -   Alamat singkat.
    -   Peta atau gambar lokasi.
    -   Tombol View Location / Get Directions.
11. **Final CTA**
    -   Ajakan menghubungi perusahaan.
    -   Tombol WhatsApp yang menonjol.
12. **Footer**
    -   Logo dan ringkasan perusahaan.
    -   Navigasi.
    -   Kategori produk.
    -   Kontak.
    -   Alamat.
    -   Social media.
    -   Copyright.

### 7.3 About Us

Menampilkan: - Profil perusahaan. - Sejarah singkat jika tersedia. -
Visi dan misi jika tersedia. - Nilai perusahaan. - Pengalaman dan
keunggulan. - Foto kantor, pabrik, workshop, atau tim. - Informasi
kapasitas produksi hanya jika telah dikonfirmasi perusahaan.

### 7.4 Product Catalog

Kategori awal yang dapat disesuaikan: - Wooden Chairs. - Dining
Tables. - Living Room Furniture. - Bedroom Furniture. - Office
Furniture. - Cabinets and Shelves. - Outdoor Furniture. - Custom
Furniture.

Setiap kartu produk menampilkan: - Foto utama. - Nama produk. -
Kategori. - Deskripsi singkat. - Harga jika perusahaan mengizinkan harga
ditampilkan. - Tombol View Detail. - Tombol WhatsApp / Ask for Price.

Fitur katalog: - Filter berdasarkan kategori. - Pencarian produk
sederhana jika jumlah produk cukup banyak. - Tata letak grid
responsif. - Empty state jika produk tidak ditemukan. - Navigasi kembali
ke katalog dari halaman detail.

### 7.5 Product Detail

Informasi yang dapat ditampilkan: - Nama produk. - Foto utama dan galeri
foto. - Kode produk / SKU jika tersedia. - Deskripsi produk. - Material
kayu. - Dimensi. - Warna. - Jenis finishing. - Pilihan custom jika
tersedia. - Keunggulan produk. - Produk terkait. - CTA WhatsApp untuk
menanyakan harga atau melakukan pemesanan.

Data yang tidak tersedia tidak boleh dibuat-buat. Sembunyikan field
opsional yang kosong.

### 7.6 Services

Tampilkan layanan yang benar-benar disediakan perusahaan, misalnya: -
Furniture Manufacturing. - Custom Furniture. - Furniture for Hotel and
Restaurant. - Furniture for Office. - Furniture Project Supply. -
Wholesale / Distribution.

Setiap layanan berisi judul, deskripsi, gambar pendukung, dan CTA
WhatsApp.

### 7.7 Our Projects / Portfolio

Setiap item proyek dapat menampilkan: - Nama atau jenis proyek. - Foto
hasil pengerjaan. - Lokasi umum jika boleh dipublikasikan. - Tahun
pengerjaan jika tersedia. - Jenis furniture. - Deskripsi singkat.

Nama klien hanya ditampilkan jika perusahaan memiliki izin.

### 7.8 Gallery

Kategori galeri: - Product. - Workshop / Factory. - Production
Process. - Completed Projects.

Fitur: - Grid foto responsif. - Optimasi gambar. - Lightbox sederhana
saat foto dipilih. - Alt text untuk aksesibilitas dan SEO.

### 7.9 Contact Us

Informasi: - Nama perusahaan. - Alamat kantor. - Alamat pabrik jika
berbeda. - Nomor telepon. - WhatsApp. - Email. - Jam operasional. -
Social media. - Google Maps.

Sediakan tombol: - Chat WhatsApp. - Call Now. - Send Email. - View
Location. - Get Directions.

Form kontak sederhana bersifat opsional. Jika dibuat, minimal memuat
nama, nomor WhatsApp/email, subjek, dan pesan. Form harus memiliki
validasi serta mekanisme pengiriman yang benar; jangan menampilkan pesan
sukses jika data belum benar-benar terkirim.

## 8. Integrasi WhatsApp

WhatsApp adalah kanal konversi utama.

### 8.1 Titik Penempatan CTA

-   Navbar.
-   Hero section.
-   Setiap kartu produk.
-   Halaman detail produk.
-   Halaman layanan.
-   Bagian akhir homepage.
-   Contact Us.
-   Floating WhatsApp button.

### 8.2 Format Link

Gunakan format Click to Chat:

``` text
https://wa.me/62XXXXXXXXXX?text=Halo%2C%20saya%20tertarik
```

Nomor harus menggunakan kode negara tanpa tanda `+`, spasi, atau tanda
hubung.

Nomor WhatsApp perusahaan harus diambil dari konfigurasi project, bukan
ditulis berulang kali di banyak komponen.

### 8.3 Pesan Otomatis Produk

Contoh pesan:

``` text
Halo, saya mengunjungi website [Nama Perusahaan].
Saya tertarik dengan produk [Nama Produk].
Mohon informasi harga, spesifikasi, dan ketersediaan produk tersebut.
Terima kasih.
```

Pesan harus dibuat secara dinamis berdasarkan produk yang dipilih dan
di-URL-encode dengan benar.

## 9. Google Maps dan Fitur Lokasi

Fitur lokasi wajib tersedia pada halaman Contact Us dan dapat
ditampilkan sebagai preview pada homepage.

### 9.1 Google Maps Embed

-   Tampilkan peta lokasi kantor dan/atau pabrik.
-   Gunakan Google Maps Embed URL atau metode resmi Google Maps yang
    sesuai.
-   Peta harus responsif.
-   Berikan judul atau label lokasi yang jelas.
-   Sediakan fallback berupa alamat dan link Google Maps jika peta gagal
    dimuat.

### 9.2 View Location

Tombol membuka lokasi perusahaan di Google Maps pada tab atau aplikasi
baru.

Contoh format:

``` text
https://www.google.com/maps/search/?api=1&query=ALAMAT_ATAU_KOORDINAT
```

### 9.3 Get Directions

Tombol membuka Google Maps Directions sehingga pengguna dapat meminta
rute dari lokasi mereka menuju perusahaan.

Contoh format:

``` text
https://www.google.com/maps/dir/?api=1&destination=ALAMAT_ATAU_KOORDINAT
```

### 9.4 Multiple Locations

Jika perusahaan memiliki kantor dan pabrik berbeda, tampilkan
masing-masing sebagai lokasi terpisah: - Head Office. - Factory /
Workshop. - Showroom (jika tersedia).

Setiap lokasi memiliki nama, alamat, peta, tombol View Location, dan
tombol Get Directions.

### 9.5 Data Lokasi

Alamat dan koordinat harus diberikan atau dikonfirmasi oleh pemilik
perusahaan. Jangan mengarang alamat, koordinat, atau lokasi bisnis.

## 10. Desain UI/UX

### 10.1 Arah Visual

Gunakan gaya **Premium Minimalist Furniture** dengan nuansa alami,
hangat, modern, dan profesional.

Inspirasi visual: - Fotografi furniture berkualitas tinggi. - Layout
editorial yang bersih. - Ruang kosong yang cukup. - Tipografi tegas dan
mudah dibaca. - Warna natural yang konsisten. - Animasi ringan dan tidak
menghambat akses konten.

### 10.2 Palet Warna

  Elemen       Rekomendasi
  ------------ -----------------------
  Primary      Dark Walnut `#38271F`
  Secondary    Wood Brown `#80634D`
  Accent       Oak `#C9A77C`
  Background   Cream `#EDE4D6`
  Surface      Ivory `#F8F6F1`
  Text         Charcoal `#25211E`

Warna dapat disesuaikan dengan identitas brand perusahaan.

### 10.3 Typography

Rekomendasi: - Heading: Playfair Display atau font serif elegan
sejenis. - Body: DM Sans atau sans-serif yang mudah dibaca.

Gunakan maksimal dua keluarga font utama dan optimalkan pemuatan font.

### 10.4 Responsive Design

Website harus berjalan baik pada: - Desktop. - Laptop. - Tablet. -
Smartphone Android. - iPhone.

Prioritaskan pengalaman mobile karena calon pembeli kemungkinan membuka
website dari WhatsApp, media sosial, atau mesin pencari.

## 11. Performance Requirements

Prioritas website adalah loading cepat dan pengalaman pengguna yang
baik.

Persyaratan: - Gunakan format gambar WebP atau AVIF bila memungkinkan. -
Kompres gambar sebelum digunakan. - Gunakan ukuran gambar yang sesuai
dengan area tampil. - Implementasikan lazy loading untuk gambar di luar
viewport awal. - Prioritaskan pemuatan hero image. - Gunakan code
splitting dan lazy loading halaman bila bermanfaat. - Hindari dependency
dan animasi yang tidak diperlukan. - Hindari video autoplay berukuran
besar. - Tetapkan dimensi gambar untuk mengurangi layout shift. -
Optimalkan font. - Minimalkan JavaScript yang dikirim ke browser. -
Pastikan tidak ada error console yang kritis.

Target awal Lighthouse: - Performance: minimal 85 sebagai target awal. -
Accessibility: minimal 90. - Best Practices: minimal 90. - SEO: minimal
90.

Nilai tersebut merupakan target pengujian, bukan jaminan otomatis. Uji
pada deployment production dan perangkat mobile.

## 12. SEO dan Marketing

Fitur SEO: - Unique page title. - Meta description. - Heading hierarchy
yang benar. - URL yang mudah dibaca. - Canonical URL. - Open Graph
metadata. - Twitter card metadata. - Sitemap XML. - Robots.txt. - Alt
text gambar. - Internal linking. - Schema.org Organization /
LocalBusiness sesuai data valid. - Product structured data jika sesuai
dan seluruh informasi produk tersedia.

Integrasi marketing opsional: - Google Analytics 4. - Google Search
Console. - Meta Pixel.

Tracking yang disarankan: - Klik WhatsApp. - Klik Call Now. - Klik View
Location. - Klik Get Directions. - Klik detail produk.

Pastikan pemasangan analytics dan pixel mematuhi ketentuan privasi yang
berlaku.

## 13. Struktur Project React + TypeScript

Contoh struktur yang direkomendasikan:

``` text
furniture-company/
├── public/
│   ├── images/
│   ├── icons/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── products/
│   │   └── contact/
│   ├── data/
│   │   ├── company.ts
│   │   ├── products.ts
│   │   ├── categories.ts
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   └── locations.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── GalleryPage.tsx
│   │   └── ContactPage.tsx
│   ├── routes/
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Gunakan komponen reusable, pemisahan data dan tampilan, serta tipe
TypeScript yang jelas.

## 14. Data dan Konten yang Dibutuhkan dari Pemilik Perusahaan

Sebelum website dipublikasikan, kumpulkan: - Nama resmi perusahaan. -
Logo dan identitas brand. - Deskripsi perusahaan. - Sejarah, visi, dan
misi jika ingin ditampilkan. - Nomor WhatsApp sales. - Email dan nomor
telepon. - Alamat kantor. - Alamat pabrik/workshop. - Koordinat atau
link Google Maps. - Foto produk asli. - Nama dan deskripsi produk. -
Spesifikasi material dan ukuran. - Foto proses produksi. - Foto
portofolio proyek. - Daftar layanan. - Social media. - Jam
operasional. - Testimoni pelanggan yang telah disetujui.

Jangan membuat klaim seperti sertifikasi, kapasitas produksi, jumlah
pelanggan, pengalaman, atau testimoni tanpa data yang terverifikasi.

## 15. Acceptance Criteria

Website dianggap selesai apabila:

-   [ ] Homepage menampilkan identitas dan penawaran utama perusahaan.
-   [ ] Navigasi berfungsi pada desktop dan mobile.
-   [ ] Halaman About Us dapat diakses.
-   [ ] Katalog produk tampil dengan baik.
-   [ ] Filter kategori dan pencarian (jika disediakan) berfungsi.
-   [ ] Halaman detail produk menampilkan informasi yang tersedia.
-   [ ] CTA WhatsApp bekerja.
-   [ ] Pesan WhatsApp produk memuat nama produk yang benar.
-   [ ] Halaman Services, Projects, dan Gallery berjalan.
-   [ ] Informasi kontak tampil dengan benar.
-   [ ] Google Maps menampilkan lokasi yang telah dikonfirmasi.
-   [ ] Tombol View Location membuka lokasi yang benar.
-   [ ] Tombol Get Directions membuka petunjuk arah yang benar.
-   [ ] Website responsif pada berbagai ukuran layar.
-   [ ] Gambar telah dioptimalkan.
-   [ ] SEO dasar telah diterapkan.
-   [ ] Tidak ada link atau tombol utama yang rusak.
-   [ ] Website berhasil di-deploy ke Vercel.
-   [ ] Tidak ada kredensial rahasia yang terekspos di source code.

## 16. Prioritas Pengembangan

### Phase 1 --- Core Marketing Website

-   Setup React, TypeScript, Vite, dan Tailwind CSS.
-   Navbar dan footer.
-   Homepage.
-   About Us.
-   Product Catalog.
-   Product Detail.
-   WhatsApp integration.
-   Contact Us.
-   Google Maps dan directions.
-   Responsive design.

### Phase 2 --- Trust & Promotion

-   Services.
-   Projects / Portfolio.
-   Gallery.
-   Testimonials jika data tersedia.
-   Manufacturing Process.
-   SEO metadata dan sitemap.
-   Google Analytics (opsional).

### Phase 3 --- Optimization & Launch

-   Optimasi gambar dan performa.
-   Pengujian seluruh CTA.
-   Pengujian Google Maps.
-   Pengujian mobile dan desktop.
-   SEO audit.
-   Deployment Vercel.
-   Uji domain dan HTTPS.

## 17. Instruksi untuk AI Coding Agent

Bangun website berdasarkan PRD ini dengan ketentuan berikut:

1.  Buat website marketing/company profile yang profesional untuk
    perusahaan manufaktur furniture kayu.
2.  Gunakan React.js, TypeScript, Vite, dan Tailwind CSS.
3.  Fokus pada tampilan premium, katalog produk, kredibilitas
    perusahaan, dan konversi penjualan melalui WhatsApp.
4.  Jangan membangun e-commerce kompleks, ERP, CRM, inventory, payment
    gateway, atau admin dashboard.
5.  Buat semua halaman dan komponen reusable sesuai sitemap.
6.  Pisahkan data perusahaan, produk, kategori, layanan, proyek, dan
    lokasi dari komponen UI.
7.  Gunakan data contoh yang diberi label jelas sebagai placeholder.
    Jangan menganggap data contoh sebagai fakta perusahaan.
8.  Buat konfigurasi terpusat untuk nama perusahaan, nomor WhatsApp,
    alamat, social media, dan lokasi.
9.  Implementasikan Google Maps Embed, View Location, dan Get Directions
    menggunakan alamat/koordinat yang dikonfirmasi.
10. Pastikan tombol WhatsApp pada produk menghasilkan pesan otomatis
    sesuai produk terkait.
11. Prioritaskan mobile-first responsive design, loading cepat,
    aksesibilitas, dan SEO.
12. Jangan menambahkan fitur di luar scope tanpa alasan dan persetujuan.
13. Pastikan project dapat dijalankan secara lokal dan di-deploy ke
    Vercel.
14. Buat README berisi petunjuk instalasi, konfigurasi, development,
    build, dan deployment.
15. Sebelum menyatakan selesai, jalankan pemeriksaan TypeScript, build,
    dan pengujian navigasi serta seluruh CTA.

------------------------------------------------------------------------

**Catatan akhir:** Website ini adalah media marketing dan penjualan
digital. Keberhasilan utamanya diukur dari kemudahan calon pembeli
menemukan produk, memahami keunggulan perusahaan, menemukan lokasi, dan
menghubungi sales melalui WhatsApp.
