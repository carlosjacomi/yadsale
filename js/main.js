const menuEmail = document.querySelector('.navbar-email');
const menuDesk = document.querySelector('.desktop-menu');
const menuIco = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const carritoIco = document.querySelector('.navbar-shopping-cart');
const flechaCarrito = document.querySelector('.flecha-carrito');
const detalleCarrito = document.querySelector('.carrito');


menuEmail.addEventListener('click',toggDesktopMenu);

function toggDesktopMenu() {
	menuDesk.classList.toggle('inactive');
}

menuIco.addEventListener('click',toggMobileMenu);

function toggMobileMenu() {
	menuMobile.classList.toggle('inactive');
}

carritoIco.addEventListener('click',toggCarrito);
flechaCarrito.addEventListener('click',toggCarrito);


function toggCarrito() {
	detalleCarrito.classList.toggle('inactive');
}