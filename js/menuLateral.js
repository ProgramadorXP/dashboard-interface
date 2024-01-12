'use strict'
const aside = document.getElementById('aside');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');

menuOpen.addEventListener('click', () => {
    aside.classList.toggle('show');
});
menuClose.addEventListener('click', () => {
    aside.classList.toggle('show');
});