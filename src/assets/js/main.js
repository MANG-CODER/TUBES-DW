// ===============================
// HERO SLIDER
// ===============================
const slides = document.getElementById("slides");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const total = slides?.children.length || 0;
let index = 0;

function update() {
  if (!slides) return;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Auto slide
if (slides) {
  setInterval(() => {
    index = (index + 1) % total;
    update();
  }, 3000);
}

// ===============================
// DARK MODE TOGGLE
// ===============================
const darkToggle = document.getElementById("darkToggle");
const root = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
}

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      root.classList.contains("dark") ? "dark" : "light"
    );
  });
}

// ===============================
// MOBILE MENU
// ===============================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

// ===============================
// SCROLL REVEAL
// ===============================
const reveals = document.querySelectorAll(
  ".animate-fade, .animate-slideUp, .animate-slideUp"
);

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("opacity-100");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((r) => {
  r.classList.add("opacity-0");
  io.observe(r);
});

// ===============================
// SECTION: MENGAPA MEMILIH UP (UPDATED)
// ===============================
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    // reset semua tab
    tabs.forEach((t) => {
      const title = t.querySelector("span:first-child");
      const dot = t.querySelector(".dot");

      title?.classList.remove("text-blue-700");
      title?.classList.add("text-gray-700");

      dot?.classList.remove("bg-blue-700");
      dot?.classList.add("bg-gray-400");
    });

    // aktifkan tab diklik
    const title = tab.querySelector("span:first-child");
    const dot = tab.querySelector(".dot");

    title?.classList.add("text-blue-700");
    title?.classList.remove("text-gray-700");

    dot?.classList.add("bg-blue-700");
    dot?.classList.remove("bg-gray-400");

    // tampilkan content sesuai tab
    contents.forEach((content) => {
      if (content.dataset.content === target) {
        content.classList.remove("hidden");
        content.classList.add("block");
      } else {
        content.classList.add("hidden");
        content.classList.remove("block");
      }
    });
  });
});

// ===============================
// POPUP VIDEO EXPLORE UP
// ===============================
const modal = document.getElementById("modalVideo");
const ytFrame = document.getElementById("ytFrame");
const openBtn = document.getElementById("openVideo");
const closeBtn = document.getElementById("closeVideo");

const YT_LINK = "https://www.youtube.com/embed/ahfWx-X1tHM?autoplay=1";

openBtn?.addEventListener("click", () => {
  modal?.classList.remove("hidden");
  if (ytFrame) ytFrame.src = YT_LINK;
});

closeBtn?.addEventListener("click", () => {
  modal?.classList.add("hidden");
  if (ytFrame) ytFrame.src = "";
});

modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    if (ytFrame) ytFrame.src = "";
  }
});

// ===============================
// FLOATING DARK MODE BUTTON
// ===============================
const darkFloating = document.getElementById("darkToggleFloating");

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
  chatBox?.classList.toggle("hidden");
});

closeChat?.addEventListener("click", () => {
  chatBox?.classList.add("hidden");
});
