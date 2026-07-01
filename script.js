// --- THEME TOGGLE ---
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// --- SECTION NAVIGATION ---
const navLinks = document.querySelectorAll(".nav-link");
const mobileLinks = document.querySelectorAll(".nav-link-mobile");
const sections = document.querySelectorAll(".section");

function showSection(sectionId) {
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === sectionId) {
      link.classList.add("active");
    }
  });

  mobileLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === sectionId) {
      link.classList.add("active");
    }
  });

  closeMobile();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("data-section");
    showSection(sectionId);
  });
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("data-section");
    showSection(sectionId);
  });
});

document.querySelectorAll('.btn[data-section="contact"]').forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showSection("contact");
  });
});

// --- MOBILE MENU ---
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileClose");

function openMobile() {
  mobileNav.classList.add("open");
  mobileOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobile() {
  mobileNav.classList.remove("open");
  mobileOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

hamburgerBtn.addEventListener("click", openMobile);
mobileClose.addEventListener("click", closeMobile);
mobileOverlay.addEventListener("click", closeMobile);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobile();
});

// --- SHOW HOME BY DEFAULT ---
showSection("home");

// --- ANIMATE SKILL BARS ON SCROLL ---
const skillItems = document.querySelectorAll(".skill-item");

const animateSkills = () => {
  skillItems.forEach((item) => {
    const bar = item.querySelector(".fill");
    const rect = item.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible && bar) {
      bar.style.transition = "width 1s ease";
    }
  });
};

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// --- TOOLS TOGGLE BUTTON ---
const toolsToggleBtn = document.getElementById("toolsToggleBtn");
const toolsContainer = document.getElementById("toolsContainer");
let isToolsOpen = false;

toolsToggleBtn.addEventListener("click", () => {
  isToolsOpen = !isToolsOpen;
  toolsContainer.classList.toggle("open");

  if (isToolsOpen) {
    toolsToggleBtn.innerHTML = '<i class="fas fa-tools"></i> Hide Tools';
  } else {
    toolsToggleBtn.innerHTML = '<i class="fas fa-tools"></i> Tools';
  }
});

// --- ABOUT ME TOGGLE BUTTON ---
const aboutToggleBtn = document.getElementById("aboutToggleBtn");
const aboutContainer = document.getElementById("aboutContainer");
let isAboutOpen = false;

aboutToggleBtn.addEventListener("click", () => {
  isAboutOpen = !isAboutOpen;
  aboutContainer.classList.toggle("open");

  if (isAboutOpen) {
    aboutToggleBtn.innerHTML = '<i class="fas fa-user"></i> Hide About';
  } else {
    aboutToggleBtn.innerHTML = '<i class="fas fa-user"></i> About Me';
  }
});

// --- RECOMMENDATIONS TOGGLE BUTTON ---
const recommendationsToggleBtn = document.getElementById("recommendationsToggleBtn");
const recommendationsContainer = document.getElementById("recommendationsContainer");
let isRecommendationsOpen = false;

recommendationsToggleBtn.addEventListener("click", () => {
  isRecommendationsOpen = !isRecommendationsOpen;
  recommendationsContainer.classList.toggle("open");

  if (isRecommendationsOpen) {
    recommendationsToggleBtn.innerHTML = '<i class="fas fa-star"></i> Hide Recommendations';
  } else {
    recommendationsToggleBtn.innerHTML = '<i class="fas fa-star"></i> Recommendations & Comments';
  }
});
