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
  let heroPlayer;
  let heroIndex = 0;
  let heroInterval = null;

  const heroSlides = document.getElementById("heroSlides");
  const heroTotal = heroSlides.children.length;

  function onYouTubeIframeAPIReady() {
    heroPlayer = new YT.Player("ytHero", {
      videoId: "ahfWx-X1tHM",
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 1
      },
      events: {
        onStateChange: heroVideoState
      }
    });
  }

  function heroVideoState(e) {
    if (e.data === YT.PlayerState.ENDED) {
      startHeroCarousel();
    }
  }

  function goHeroSlide(i) {
    heroSlides.style.transform = `translateX(-${i * 100}%)`;
    heroIndex = i;
  }

  function startHeroCarousel() {
    // pindah ke slide gambar pertama
    goHeroSlide(1);

    heroInterval = setInterval(() => {
      heroIndex++;
      if (heroIndex >= heroTotal) heroIndex = 1;
      goHeroSlide(heroIndex);
    }, 5000);
  }

// =========================
// HERO CAROUSEL CONTROLLER
// =========================
const slides = document.getElementById("heroSlides");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let slideIndex = 0;
let slideInterval = null;
let player;
let isVideoPlaying = false;

const totalSlides = slides.children.length;

// ======================
// SLIDE CONTROL
// ======================
function goToSlide(index) {
  slideIndex = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;

  if (slideIndex === 0) {
    stopAutoSlide();
    player?.playVideo();
  }
}

// ======================
// AUTOSLIDE
// ======================
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

// ======================
// BUTTON EVENTS
// ======================
prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  player?.pauseVideo();
  goToSlide(slideIndex - 1);
  startAutoSlide();
});

nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  player?.pauseVideo();
  goToSlide(slideIndex + 1);
  startAutoSlide();
});

// ======================
// YOUTUBE API
// ======================
function onYouTubeIframeAPIReady() {
  player = new YT.Player("ytHero", {
    videoId: "ahfWx-X1tHM",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      rel: 0,
      playsinline: 1
    },
    events: {
      onStateChange: e => {
        if (e.data === YT.PlayerState.PLAYING) {
          isVideoPlaying = true;
          stopAutoSlide();
        }
        if (e.data === YT.PlayerState.ENDED) {
          isVideoPlaying = false;
          goToSlide(1);
          startAutoSlide();
        }
      }
    }
  });
}
// INIT
goToSlide(0);



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

const YT_LINK =
  "";

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  ytFrame.src = YT_LINK;
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  ytFrame.src = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
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
  chatBox?.classList.toggle("hidden");
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
