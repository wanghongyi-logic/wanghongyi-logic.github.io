"use strict";
document.documentElement.classList.add('js');
// Keep short pages at the visible window height, including mobile browser toolbars.
let lastViewportHeight = 0;
function syncViewportHeight() {
  const viewport = window.visualViewport;
  if (viewport && Math.abs(viewport.scale - 1) > 0.01) return;
  const height = Math.round(viewport?.height || window.innerHeight);
  if (height > 0 && height !== lastViewportHeight) {
    document.documentElement.style.setProperty('--viewport-height', `${height}px`);
    lastViewportHeight = height;
  }
}
syncViewportHeight();
window.addEventListener('resize', syncViewportHeight, {passive: true});
window.addEventListener('pageshow', syncViewportHeight);
window.visualViewport?.addEventListener('resize', syncViewportHeight, {passive: true});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('primary-nav');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
}
menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) setMenu(false);
});
document.querySelector('.skip-link')?.addEventListener('click', () => {
  window.requestAnimationFrame(() => document.getElementById('main').focus({preventScroll: true}));
});
