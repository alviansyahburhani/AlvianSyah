# Analisis Desain Antarmuka Pengguna (UI)
**Referensi Gambar:** `download.jpg`

---

## 1. Estetika dan Konsep Visual
* **Gaya Desain:** Modern, eksploratif, dan bertema alam dengan pendekatan *dark mode*.
* **Latar Belakang:** Menggunakan fotografi layar penuh (*full-bleed*) beresolusi tinggi (pemandangan hutan pinus dan jembatan kayu) sebagai jangkar visual utama.
* **Kontras:** Mengandalkan kontras yang tinggi antara teks elemen UI yang berwarna terang (putih/hijau) dengan latar belakang foto yang cenderung gelap agar tingkat keterbacaan tetap terjaga.

## 2. Tipografi
Secara keseluruhan, desain ini secara eksklusif menggunakan keluarga *font* **Sans-serif** yang modern, bersih, dan geometris. Hierarki dibangun melalui kontras ukuran, ketebalan (*weight*), dan gaya.

### Hierarki Teks:
* **Judul Utama ("FOREST"):**
  * **Gaya:** *All-caps* (huruf kapital), gaya *outline* (garis luar tanpa isian warna).
  * **Ukuran:** Sangat besar (*oversized*), mendominasi layar kiri atas.
  * **Modifikasi:** Huruf "O" memiliki isian (*fill*) warna hijau pada separuh bagian bawah sebagai sentuhan eksperimental.
* **Sub-judul ("ADVENTURE"):**
  * **Gaya:** *All-caps*, *bold* (tebal), warna putih solid.
  * **Posisi:** Menumpuk (*overlapping*) di atas judul utama untuk menciptakan ilusi kedalaman ruang.
* **Angka Dekoratif & Data:**
  * **Angka Halaman ("05"):** *Outline* tipis, *all-caps*, hijau aksen.
  * **Suhu ("-11"):** Ukuran besar, *light/thin weight*, putih solid.
* **Teks Paragraf (Body Copy):**
  * **Gaya:** *Light/regular weight*, *sentence case*, ukuran kecil.
  * **Tata Letak:** Rata kiri (*left-aligned*) dengan jarak antar baris (*line-height*) yang renggang agar nyaman dibaca.
* **Widget & Navigasi:**
  * **Tanggal ("OCTOBER, 21"):** *Bold*, *all-caps*, hijau aksen.
  * **Hari ("SUNDAY"):** *Regular*, *all-caps*, putih solid, ukuran lebih kecil.
  * **Metrik & Menu:** Menggunakan ukuran sangat kecil (*micro-typography*), dengan ketebalan proporsional untuk membedakan antara label dan angka data.

## 3. Palet Warna
Desain ini menerapkan palet warna yang terbatas dan terarah. Estetika warna sangat bergantung pada gambar latar belakang, sementara elemen UI menggunakan warna-warna strategis untuk navigasi dan penekanan.

* **Warna Aksen: Hijau Pastel / Zaitun Muda (Est. Hex `#B8CD86`)**
  * **Fungsi:** Mengikat elemen UI dengan tema alam serta menjadi titik fokus visual.
  * **Penggunaan:** Indikator status aktif pada menu ("Blog"), isian modifikasi huruf "O", teks bulan/tanggal ("OCTOBER, 21"), angka halaman "05", dan balok informasi di sudut kiri bawah.
* **Warna Utama UI: Putih Solid & Putih Transparan (`#FFFFFF`)**
  * **Fungsi:** Menjaga fungsionalitas dan keterbacaan tingkat tinggi.
  * **Penggunaan (Solid):** Teks "ADVENTURE", suhu, hari, menu pasif, ikon, dan garis bantu.
  * **Penggunaan (Transparan):** *Outline* pada teks judul utama "FOREST" dan angka dekoratif agar elemen besar tidak terasa berat.
* **Warna Latar Elemen: Hitam Transparan (`#000000` dengan *Opacity*)**
  * **Fungsi:** *Glassmorphism* atau *overlay* gelap untuk menampung teks tanpa menutupi latar belakang.
  * **Penggunaan:** Kotak modul data (probabilitas hujan dan angin) di sudut kanan bawah.
* **Warna Dasar: Nuansa Alam Gelap (Dari Fotografi)**
  * **Fungsi:** Menghasilkan palet gelap alami (hijau pinus tua, cokelat kayu jembatan, keabu-abuan) yang bertindak sebagai kanvas bertekstur.

## 4. Tata Letak dan Komposisi
* **Header (Atas):** *Hamburger menu* di sisi kiri, tautan navigasi di tengah, dan bilah pencarian bergaris luar di sisi kanan.
* **Sidebar (Kiri):** Ikon media sosial (Facebook, YouTube, Twitter) berdesain melingkar, disusun vertikal dan terhubung garis panduan putih.
* **Footer / Konten Bawah:** Terdapat kontrol *slider/carousel* berupa blok hijau di kiri, tombol panah navigasi, dan titik indikator halaman (*pagination dots*) di bagian tengah bawah.
* **Widget Cuaca/Data (Kanan):** Ditempatkan secara asimetris di area kanan tengah dan bawah, membiarkan bagian tengah gambar jembatan tetap kosong (*negative space*) sebagai ruang bernapas untuk desain.