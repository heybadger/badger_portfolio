// --- THEME TOGGLE ---
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// --- SECTION NAVIGATION (Single Page App Style) ---
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

function showSection(sectionId) {
  // Hide all sections
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Update active nav link
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === sectionId) {
      link.classList.add('active');
    }
  });

  // Scroll to top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Nav link clicks
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('data-section');
    showSection(sectionId);
  });
});

// --- "Hire Me" Button ---
const hireBtn = document.querySelector('.btn[data-section="contact"]');
if (hireBtn) {
  hireBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('contact');
  });
}

// --- SHOW HOME BY DEFAULT ---
showSection('home');