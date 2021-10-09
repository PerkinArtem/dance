const body = document.querySelector('body');
const header = document.querySelector('.header');
const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', function() {
    nav.classList.toggle('active');
})