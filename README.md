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
└── README.md               # Dokumentasi ini
