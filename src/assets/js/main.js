console.log("MAIN JS BERJALAN..");

// =========================
// GLOBAL ELEMENTS
// =========================
const root = document.documentElement;
const darkFloating = document.getElementById("darkToggleFloating");
const mapLight = document.getElementById("mapLight");
const mapDark = document.getElementById("mapDark");
const darkToggle = document.getElementById("darkToggle");

// =========================
// DARK MODE SYSTEM
// =========================

// APPLY THEME ON LOAD
function applyStoredTheme() {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    root.classList.add("dark");
    setDarkIcon(true);
  } else {
    root.classList.remove("dark");
    setDarkIcon(false);
  }

  updateMapTheme();
}

// CHANGE ICON
function setDarkIcon(isDark) {
  if (!darkFloating) return;

  if (isDark) {
    darkFloating.innerHTML = "☀️";
    darkFloating.classList.add("icon-dark");
  } else {
    darkFloating.innerHTML = "🌙";
    darkFloating.classList.remove("icon-dark");
  }
}

// MAIN TOGGLE
function toggleDarkMode() {
  const isDark = root.classList.toggle("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  setDarkIcon(isDark);
  updateMapTheme();
}

// MAP SYSTEM
function updateMapTheme() {
  const isDark = root.classList.contains("dark");

  // jika tidak ada map (berita.html), jangan error
  if (!mapLight || !mapDark) return;

  if (isDark) {
    mapLight.classList.add("hidden");
    mapDark.classList.remove("hidden");
  } else {
    mapDark.classList.add("hidden");
    mapLight.classList.remove("hidden");
  }
}

// EVENT LISTENERS
darkFloating?.addEventListener("click", toggleDarkMode);
darkToggle?.addEventListener("click", toggleDarkMode);

// APPLY ON PAGE LOAD
applyStoredTheme();


// =========================
// HERO SLIDER
// =========================
const slides = document.getElementById("slides");
let index = 0;

if (slides) {
  const total = slides.children.length;

  function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(() => {
    index = (index + 1) % total;
    updateSlider();
  }, 3000);
}


// =========================
// MOBILE MENU
// =========================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


// =========================
// SCROLL REVEAL
// =========================
const reveals = document.querySelectorAll(".animate-fade, .animate-slideUp");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("opacity-100");
    });
  },
  { threshold: 0.1 }
);

reveals.forEach(el => {
  el.classList.add("opacity-0");
  observer.observe(el);
});


// =========================
// POPUP VIDEO
// =========================
const modal = document.getElementById("modalVideo");
const ytFrame = document.getElementById("ytFrame");
const openBtn = document.getElementById("openVideo");
const closeBtn = document.getElementById("closeVideo");

const YT_LINK = "https://www.youtube.com/embed/ahfWx-X1tHM?autoplay=1";

openBtn?.addEventListener("click", () => {
  modal.classList.remove("hidden");
  ytFrame.src = YT_LINK;
});

closeBtn?.addEventListener("click", () => {
  modal.classList.add("hidden");
  ytFrame.src = "";
});

modal?.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    ytFrame.src = "";
  }
});


// =========================
// CHAT FLOATING
// =========================
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

chatToggle?.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

closeChat?.addEventListener("click", () => {
  chatBox.classList.add("hidden");
});


// =========================
// TAB SYSTEM
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active-tab"));
      contents.forEach(c => c.classList.add("hidden"));

      tab.classList.add("active-tab");
      const tabID = tab.getAttribute("data-tab");
      document.querySelector(`[data-content="${tabID}"]`).classList.remove("hidden");
    });
  });
});


// =========================
// SCROLL TO TOP
// =========================
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) scrollBtn.classList.remove("hidden");
  else scrollBtn.classList.add("hidden");
});

scrollBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
