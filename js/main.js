const menuEmail = document.querySelector('.navbar-email');
const menuDesk = document.querySelector('.desktop-menu');
const menuIco = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggDesktopMenu);

function toggDesktopMenu() {
	menuDesk.classList.toggle('inactive');
}

menuIco.addEventListener('click',toggMobileMenu);

function toggMobileMenu() {
	menuMobile.classList.toggle('inactive');
}