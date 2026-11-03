"use strict";
// Native links work without JavaScript. Keep keyboard focus with in-page navigation.
const inPageLinks = document.querySelectorAll('a[href^="#"]');
function updateCurrentLink() {
  const current = window.location.hash;
  document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
    if (current && link.getAttribute('href') === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
inPageLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const destination = document.getElementById(link.getAttribute('href').slice(1));
    if (!destination) return;
    if (!destination.hasAttribute('tabindex')) destination.setAttribute('tabindex', '-1');
    window.requestAnimationFrame(() => destination.focus({preventScroll: true}));
  });
});
window.addEventListener('hashchange', updateCurrentLink);
updateCurrentLink();
