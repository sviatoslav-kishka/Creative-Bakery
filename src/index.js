'use strict';

const toggle = document.querySelector('.navigation__toggle');
const navHeader = document.querySelectorAll('.nav__item--mobile');

for (let i = 0; i < navHeader.length; i++) {
  navHeader[i].addEventListener('click', () => {
    toggle.checked = false;
  });
}
