"use strict";
// Page navigation uses ordinary links; only the skip link needs a focus handoff.
document.querySelector('.skip-link')?.addEventListener('click', () => {
  window.requestAnimationFrame(() => document.getElementById('main').focus({preventScroll: true}));
});
