// Mobile hamburger menu toggle

document.addEventListener('DOMContentLoaded', setupMenu);

function setupMenu() {
  let hamburger = document.querySelector('.hamburger');
  let navMenu = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  let hamburger = document.querySelector('.hamburger');
  let navMenu = document.getElementById('nav-menu');

  let isOpen = navMenu.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}
