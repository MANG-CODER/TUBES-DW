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

### Live Demo & Deployment: [up.ac.id](https://universitasmangcoder.netlify.app/) 

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
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
  <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
</div>

* **HTML5 & Semantik**
    Struktur halaman disusun menggunakan elemen semantik (`<header>`, `<main>`, `<section>`, `<article>`). Kami juga menerapkan atribut `lang="id"` dan `scroll-smooth` untuk pengalaman navigasi yang lebih natural dan aksesibel bagi pembaca layar (*screen reader*).

* **Tailwind CSS (Utility-First Framework)**
    Styling dilakukan menggunakan Tailwind CSS yang dimuat melalui CDN untuk fleksibilitas pengembangan.
    * **Brand Identity:** Kami melakukan kustomisasi konfigurasi Tailwind (`tailwind.config`) secara *in-line* untuk menambahkan palet warna identitas kampus:
        * 🔵 `upBlue` (#3b82f6)
        * ⚪️ `upWhite` (#fff)
    * **Dark Mode Support:** Implementasi mode gelap (*Dark Mode*) sepenuhnya menggunakan *class strategy*, memungkinkan transisi tema otomatis yang nyaman di mata.
    * **Animasi Kustom:** Menambahkan animasi `fadeIn` dan `slideUp` pada konfigurasi untuk memberikan efek visual yang halus saat konten dimuat.

* **Vanilla JavaScript (ES6+) & DOM Manipulation**
    Logika interaktif dibangun tanpa framework berat, menjaga performa tetap ringan.
    * **UI Logic:** Mengatur fungsionalitas Toggle Menu Mobile, Tab Navigasi ("Mengapa Memilih UP"), dan tombol *Scroll to Top*.
    * **Hero Carousel:** Logika slider gambar manual yang responsif terhadap interaksi pengguna.

### ⚙️ Development Tools

* **VS Code:** Editor kode utama yang dikonfigurasi dengan berbagai ekstensi untuk memastikan standar penulisan kode yang rapi (*linting*) dan efisiensi pengembangan.
* **Git:** Digunakan sebagai sistem pengontrol versi (*Version Control System*) untuk melacak setiap perubahan pada kode sumber secara mendetail.
* **GitHub:** Berfungsi sebagai repositori pusat untuk kolaborasi, pencadangan kode *cloud*, dan manajemen proyek.

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
├── src/
│    ├── assets/
│    │   ├── css/
│    │   │   └── style.css       # Custom CSS tambahan
│    │   └── js/
│    │       └── main.js         # JS Logic (Dark mode, Slider, Tab)
│    ├── image/
│    │   ├── Logo_Universitas_Pancasila.png
│    │   ├── overlayup.png       # Aset gambar (Logo, Banner, Overlay)
│    │   └── overlayupdark.png
│    ├── index.html              # Halaman Utama (Landing Page)
│    ├── beasiswa.html
│    ├── berita.html
│    ├── direktori-akademik.html
│    ├── fakultas.html
│    ├── keahlian.html
│    ├── pendidikan.html
│    ├── prodi.html
│    ├── riset.html
│    ├── tentang.html
│    ├── tpb.html
│    └── README.md               # Ringkasan Singkat Repository
├── docs/
│    └── dokumentasi.md      # Laporan Dokumentasi
├── .gitignore
├── LICENSE
└── README.md
```
---

## 💻 Bukti Responsivitas dan Tampilan

### Homepage (index.html)
| Desktop | Tablet/Pad | Mobile |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/9ba02d17-9c6a-4329-a912-96068db8ee21" alt="Dektop Screenshoot" width="500"> | <img src="https://github.com/user-attachments/assets/7a38fac7-6952-48bf-a2f1-6c37228b37a6" alt="Tablet Screenshoot" width="300"> | <img src="https://github.com/user-attachments/assets/2142c60c-c59f-412e-a0e9-613c3f675d31" alt="Mobile Screenshoot" width="200"> |

### Tentang Page (tentang.html)
| Desktop | Tablet/Pad | Mobile |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/ddad262a-afd7-4f58-85b6-6f29a6d997fb" alt="Dektop Screenshoot" width="500"> | <img src="https://github.com/user-attachments/assets/0bf05131-40de-44fa-bb03-c709a9a00dbe" alt="Tablet Screenshoot" width="300"> | <img src="https://github.com/user-attachments/assets/c06c1f7c-b929-4109-975d-77debeb235e9" alt="Mobile Screenshoot" width="200"> |

### Pendidikan Page (pendidikan.html)
| Desktop | Tablet/Pad | Mobile |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/8b33f5c3-13dd-4133-b0e7-a2a3b074b0d9" alt="Dektop Screenshoot" width="500"> | <img src="https://github.com/user-attachments/assets/9bfa5362-e99b-4f4c-af7a-db9d6df0d29e" alt="Tablet Screenshoot" width="300"> | <img src="https://github.com/user-attachments/assets/ada8ef75-c49d-4d45-9c6e-eaa68ee7207d" alt="Mobile Screenshoot" width="200"> |

### Riset & Inovasi Page (riset.html)
| Desktop | Tablet/Pad | Mobile |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/3b5e6d96-f9f7-459a-a718-11e497f6b8a9" alt="Dektop Screenshoot" width="500"> | <img src="https://github.com/user-attachments/assets/7f40d59b-5167-420b-be7d-7f3538baf8dc" alt="Tablet Screenshoot" width="300"> | <img src="https://github.com/user-attachments/assets/f3acbb35-02d1-4a35-9af0-862077e488dc" alt="Mobile Screenshoot" width="200"> |


### Berita Page (berita.html)
| Desktop | Tablet/Pad | Mobile |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/e07aff2b-5d68-4194-9316-b59390aead87" alt="Dektop Screenshoot" width="500"> | <img src="https://github.com/user-attachments/assets/fe367b55-c601-4161-a4f9-6a0cb527803c" alt="Tablet Screenshoot" width="300"> | <img src="https://github.com/user-attachments/assets/f3a43ee6-4450-49bd-ad21-503cd33031ff" alt="Mobile Screenshoot" width="200"> |

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

