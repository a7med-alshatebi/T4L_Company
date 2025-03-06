let menuIcon = document.querySelector('#menu-icon');
let mobileMenu = document.querySelector('#mobile-menu');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  mobileMenu.classList.toggle('hidden');
};