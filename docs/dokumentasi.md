# 🎓 Website Universitas Pancasila - Tugas Besar Desain Web / A

![GitHub repo size](https://img.shields.io/github/repo-size/MANG-CODER/TUBES-DW?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/MANG-CODER/TUBES-DW?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/MANG-CODER/TUBES-DW?style=for-the-badge)

> **Website profil kampus minimalis modern yang responsif, interaktif, dan sesuai Prinsip Desain Dasar (Gestalt).** <br>
> Dibuat untuk memenuhi Tugas Besar Mata Kuliah Desain Web.

---

## 📖 Deskripsi Proyek

Project ini adalah *redesign* atau pembuatan ulang website profil [**Universitas Pancasila**](https://univpancasila.ac.id). Website ini dirancang dengan tampilan modern menggunakan **Tailwind CSS** dan JavaScript murni (Vanilla JS) untuk interaktivitasnya.

Fitur unggulan meliputi mode gelap (Dark Mode) otomatis/manual, navigasi responsif, carousel banner, dan integrasi peta lokasi.

**Live Demo:** [up.ac.id](https://universitasmangcoder.netlify.app/)

---

## 👨‍🏫 Dosen Pengampu

**Bapak Adi Wahyu Pribadi** ([@adiwp](https://github.com/adiwp))
*Fakultas Teknik - Universitas Pancasila*

---

## 👥 Anggota Kelompok 9 - [@MANG-CODER](https://github.com/MANG-CODER)

| No | Nama Mahasiswa | NPM |
| :--- | :--- | :--- |
| 1. | **Muhamad Bachtiar** | 4524210141 |
| 2. | **Fadhil Pratama** | 4524210032 |
| 3. | **Ivan Wirahadi Permana** | 4524210045 |
| 4. | **Muhammad Agis Irawan** | 4524210056 |
| 5. | **Indra Fadillah Ahmad** | 4524210043 |

---

## 🛠️ Teknologi (Tech Stack)

Kami menggunakan teknologi modern tanpa framework backend (Static Site):

<div align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" />
</div>

**HTML5 & CSS3**
Struktur situs dibangun menggunakan HTML5 yang semantik untuk memastikan aksesibilitas (accessibility) dan optimasi mesin pencari (SEO) yang baik. Untuk penataan visual, kami menggunakan standar CSS3 modern.

**Styling: Tailwind CSS**
Kami menggunakan Tailwind CSS, sebuah framework utility-first CSS.
* Keunggulan: Memungkinkan desain kustom yang konsisten tanpa menulis ribuan baris CSS manual.
* Responsif: Situs ini dioptimalkan secara otomatis untuk berbagai ukuran layar (mobile, tablet, hingga desktop).
* Performa: Hanya CSS yang digunakan yang akan dikirim ke browser, membuat waktu pemuatan halaman menjadi sangat cepat.

**Logika: Vanilla JavaScript (ES6+)**
Untuk interaktivitas dan fungsionalitas dinamis, kami mengandalkan Vanilla JavaScript (JS murni tanpa framework seperti React atau Vue).
* Ringan: Tidak ada beban library eksternal yang berat.
* Cepat: Eksekusi langsung oleh browser memberikan pengalaman pengguna yang mulus.
* Modern: Menggunakan fitur terbaru ES6+ untuk kode yang lebih ringkas dan efisien.

**Tools**
* VS Code: Editor kode utama yang dikonfigurasi dengan berbagai ekstensi untuk memastikan standar penulisan kode yang rapi (linting) dan efisiensi pengembangan.
* Git: Digunakan sebagai sistem pengontrol versi (Version Control System) untuk melacak setiap perubahan pada kode sumber secara mendetail.
* GitHub: Berfungsi sebagai repositori pusat untuk kolaborasi, pencadangan kode cloud, dan manajemen proyek.

---

## ✨ Fitur Utama

Berdasarkan *source code* yang telah dikembangkan, website ini memiliki fitur:

1.  **🌓 Dark Mode & Light Mode:**
    * Mendukung pergantian tema otomatis (disimpan di `localStorage`).
    * Tombol *floating* untuk akses cepat ganti tema.
2.  **📱 Responsif Penuh (Mobile-First):**
    * Tampilan menyesuaikan layar HP, Tablet, dan Desktop.
    * Menu navigasi *hamburger* untuk tampilan mobile.
3.  **🎢 Hero Slider & Animasi:**
    * Banner gambar bergerak otomatis.
    * Efek *fade-in* dan *slide-up* saat halaman di-*scroll* (Scroll Reveal).
4.  **📑 Tab Informasi Interaktif:**
    * Bagian "Mengapa Memilih UP" menggunakan sistem Tab untuk menghemat ruang.
5.  **📺 Video Modal Popup:**
    * Video profil kampus yang muncul dalam *popup* (modal) tanpa meninggalkan halaman.
6.  **💬 Fitur Chat Floating:**
    * Simulasi widget *live chat* di pojok kanan bawah.

---

## 📂 Struktur Folder

```text
TUBES-DW/
├── assets/
│   ├── css/
│   │   └── style.css       # Custom CSS tambahan
│   └── js/
│       └── main.js         # JS Logic (Dark mode, Slider, Tab)
├── image/
│   ├── Logo_Universitas_Pancasila.png
│   ├── overlayup.png       # Aset gambar (Logo, Banner, Overlay)
│   └── overlayupdark.png  
├── index.html              # Halaman Utama (Landing Page)
├── beasiswa.html
├── berita.html
├── direktori-akademik.html
├── fakultas.html
├── keahlian.html
├── pendidikan.html
├── prodi.html
├── riset.html
├── tentang.html
├── tpb.html
├── dokumentasi.md          # Laporan
└── README.md               
```
---

## 💻 Bukti Responsivitas dan Tampilan
| Desktop | Tablet/Pad | Mobile |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/9ba02d17-9c6a-4329-a912-96068db8ee21" alt="Dektop Screenshoot" width="500"> | <img src="https://github.com/user-attachments/assets/7a38fac7-6952-48bf-a2f1-6c37228b37a6" alt="Tablet Screenshoot" width="300"> | <img src="https://github.com/user-attachments/assets/2142c60c-c59f-412e-a0e9-613c3f675d31" alt="Mobile Screenshoot" width="200"> |

---

## Bukti Aksesibilitas
### Lighhouse Score
| Desktop | Mobile |
| :---: | :---: |
| <img width="500" height="955" alt="image" src="https://github.com/user-attachments/assets/d34152f5-af1e-49cb-9d2f-0acaff7a62ea" /> | <img width="500" height="959" alt="image" src="https://github.com/user-attachments/assets/bf489464-6853-48f4-8a19-92270a286922" /> | 

### Color Contrast Checker
| Ligh Mode | Dark Mode |
| :---: | :---: |
| <img width="500" alt="image" src="https://github.com/user-attachments/assets/b76653e0-05bd-487b-8732-09a27fe21d8c" /> | <img width="500" alt="image" src="https://github.com/user-attachments/assets/ea8cacb1-fa19-44ec-ad7b-727cb3033d6a" /> | 

### Keyboard Navigation Test
<img width="500" alt="image" src="https://github.com/user-attachments/assets/ea03eee9-dcbc-438f-af33-eec400ad8cc2" /> 

### Screen Reader Compatibility
<img width="500" alt="image" src="https://github.com/user-attachments/assets/2674a54c-e3fb-4c1b-8d84-1d80dd8b16f9" />

