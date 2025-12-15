console.log("MAIN JS BERJALAN..");

// =========================
// GLOBAL ELEMENTS
// =========================
const html = document.documentElement;
const darkFloating = document.getElementById("darkToggleFloating");
const mapLight = document.getElementById("mapLight");
const mapDark = document.getElementById("mapDark");
const overlayImage = document.getElementById("overlayImage");

// =========================
// DARK MODE SYSTEM (FIX TOTAL)
// =========================
function initTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    html.classList.add("dark");
    setThemeIcon(true);
  } else {
    html.classList.remove("dark");
    setThemeIcon(false);
  }

  updateMap();
  updateOverlay();
}

function toggleTheme() {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  setThemeIcon(isDark);
  updateMap();
  updateOverlay();
}

function setThemeIcon(isDark) {
  if (!darkFloating) return;
  darkFloating.innerHTML = isDark ? "☀️" : "🌙";
}

function updateMap() {
  if (!mapLight || !mapDark) return;
  const isDark = html.classList.contains("dark");

  mapLight.classList.toggle("hidden", isDark);
  mapDark.classList.toggle("hidden", !isDark);
}

function updateOverlay() {
  if (!overlayImage) return;
  const isDark = html.classList.contains("dark");

  overlayImage.src = isDark ? "image/overlayupdark.png" : "image/overlayup.png";
}

// EVENT
darkFloating?.addEventListener("click", toggleTheme);
initTheme();

// =========================
// HERO SLIDER + YOUTUBE
// =========================
let player;
let slideIndex = 0;
let slideInterval = null;
let isVideoPlaying = false;

const slides = document.getElementById("heroSlides");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
const totalSlides = slides ? slides.children.length : 0;

function goToSlide(index) {
  if (!slides) return;

  slideIndex = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;

  if (slideIndex === 0) {
    stopAutoSlide();
    player?.playVideo();
  }
}

function startAutoSlide() {
  if (slideInterval || isVideoPlaying) return;

  slideInterval = setInterval(() => {
    goToSlide(slideIndex + 1);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = null;
}

prevBtn?.addEventListener("click", () => {
  stopAutoSlide();
  player?.pauseVideo();
  goToSlide(slideIndex - 1);
  startAutoSlide();
});

nextBtn?.addEventListener("click", () => {
  stopAutoSlide();
  player?.pauseVideo();
  goToSlide(slideIndex + 1);
  startAutoSlide();
});

// YOUTUBE API
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("ytHero", {
    videoId: "ahfWx-X1tHM",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      rel: 0,
      playsinline: 1,
    },
    events: {
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.PLAYING) {
          isVideoPlaying = true;
          stopAutoSlide();
        }

        if (e.data === YT.PlayerState.ENDED) {
          isVideoPlaying = false;
          goToSlide(1);
          startAutoSlide();
        }
      },
    },
  });
};

goToSlide(0);

// =========================
// MOBILE MENU
// =========================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

// =========================
// SCROLL REVEAL
// =========================
const reveals = document.querySelectorAll(".animate-fade, .animate-slideUp");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100");
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((el) => {
  el.classList.add("opacity-0");
  observer.observe(el);
});

// =========================
// VIDEO MODAL
// =========================
const modal = document.getElementById("modalVideo");
const ytFrame = document.getElementById("ytFrame");
const openBtn = document.getElementById("openVideo");
const closeBtn = document.getElementById("closeVideo");

const YT_LINK ="https://drive.google.com/file/d/18EB1y5kdLyLXBuyq_C-FIlmO3x9KCSZP/preview";

openBtn?.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  ytFrame.src = YT_LINK;
});

closeBtn?.addEventListener("click", closeModal);

modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  ytFrame.src = "";
}

// =========================
// CHAT FLOATING
// =========================
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

chatToggle?.addEventListener("click", () => {
  chatBox?.classList.toggle("hidden");
});

closeChat?.addEventListener("click", () => {
  chatBox?.classList.add("hidden");
});

// =========================
// TAB SYSTEM
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active-tab"));
      contents.forEach((c) => c.classList.add("hidden"));

      tab.classList.add("active-tab");
      const id = tab.dataset.tab;
      document
        .querySelector(`[data-content="${id}"]`)
        ?.classList.remove("hidden");
    });
  });
});

// =========================
// SCROLL TO TOP
// =========================
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn?.classList.toggle("hidden", window.scrollY < 300);
});

scrollBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});