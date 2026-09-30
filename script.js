const cursor = document.querySelector('.cursor');
window.addEventListener('pointermove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});
document.querySelectorAll('a, button, .project').forEach((element) => {
  element.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
  element.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
});

const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
menu.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  menu.classList.toggle('is-open', isOpen);
  menu.setAttribute('aria-expanded', String(isOpen));
});
navMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navMenu.classList.remove('is-open');
  menu.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.v-video video').forEach((video) => {
  video.closest('.v-video').addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
  });
});
