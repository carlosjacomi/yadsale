const menuEmail = document.querySelector('.navbar-email');
const menuDesk = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggDesktopMenu);

function toggDesktopMenu() {
	menuDesk.classList.toggle('inactive');
}