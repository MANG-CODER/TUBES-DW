const slides = document.getElementById("slides");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const total = slides.children.length;
  let index = 0;

  function update() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  // Auto slide
  setInterval(() => {
    index = (index + 1) % total;
    update();
  }, 3000);  // 3000ms = 3 detik

  // Dark mode toggle
    const darkToggle = document.getElementById('darkToggle');
    const root = document.documentElement;
    // init based on localStorage
    if (localStorage.getItem('theme') === 'dark') {
      root.classList.add('dark');
    }
    if (darkToggle) {
      darkToggle.addEventListener('click', () => {
        root.classList.toggle('dark');
        if (root.classList.contains('dark')) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
      });
    }

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      if (!mobileMenu) return;
      mobileMenu.classList.toggle('hidden');
    });

    // Simple scroll reveal (very light)
    const reveals = document.querySelectorAll('.animate-fade, .animate-slideUp, .animate-slideUp');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => {
      r.classList.add('opacity-0');
      io.observe(r);
    });

    //mengapa memilih up
      const tabs = document.querySelectorAll('.tab-btn');
      const contents = document.querySelectorAll('.tab-content');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.dataset.tab;

          // reset semua tab
          tabs.forEach(t => {
            t.querySelector('span:first-child').classList.remove('text-blue-700');
            t.querySelector('span:first-child').classList.add('text-gray-700');
            t.querySelector('.dot').classList.remove('bg-blue-700');
            t.querySelector('.dot').classList.add('bg-gray-400');
          });

          // aktifkan tab diklik
          tab.querySelector('span:first-child').classList.add('text-blue-700');
          tab.querySelector('span:first-child').classList.remove('text-gray-700');
          tab.querySelector('.dot').classList.add('bg-blue-700');
          tab.querySelector('.dot').classList.remove('bg-gray-400');

          // tampilkan konten
          contents.forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('block');

            if (content.dataset.content === target) {
              content.classList.remove('hidden');
              content.classList.add('block');
            }
          });
        });
      });

// pop up video explore up
  const modal = document.getElementById("modalVideo");
  const ytFrame = document.getElementById("ytFrame");
  const openBtn = document.getElementById("openVideo");
  const closeBtn = document.getElementById("closeVideo");

  const YT_LINK = "https://www.youtube.com/embed/ahfWx-X1tHM?autoplay=1";

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    ytFrame.src = YT_LINK;
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    ytFrame.src = "";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      ytFrame.src = "";
    }
  });
// ===============================
// FLOATING DARK MODE BUTTON (FIXED)
// ===============================
const darkFloating = document.getElementById("darkToggleFloating");

// ❗ JANGAN DEKLARASI root LAGI
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

darkFloating?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
});

// ===============================
// CHAT FLOATING BUTTON
// ===============================
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

chatToggle?.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

closeChat?.addEventListener("click", () => {
  chatBox.classList.add("hidden");
});
