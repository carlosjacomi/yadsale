const menuEmail = document.querySelector('.navbar-email');
const menuDesk = document.querySelector('.desktop-menu');
const menuIco = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const carritoIco = document.querySelector('.navbar-shopping-cart');
const flechaCarrito = document.querySelector('.flecha-carrito');
const detalleCarrito = document.querySelector('.carrito');
const contenedorLista = document.querySelector('.cards-container');
const productDet = document.querySelector('.product-detail');
const productDetClose = document.querySelector('.product-detail-close');

const productList = [];

productList.push({
	name: 'Round Shelf 1',
	price: '12.000',
	img: 'https://images.pexels.com/photos/8556262/pexels-photo-8556262.jpeg?cs=srgb&dl=pexels-lisa-fotios-8556262.jpg&fm=jpg'
});

productList.push({
	name: 'Round Shelf 2',
	price: '15.000',
	img: 'https://images.pexels.com/photos/8556262/pexels-photo-8556262.jpeg?cs=srgb&dl=pexels-lisa-fotios-8556262.jpg&fm=jpg'
});

productList.push({
	name: 'Round Shelf 3',
	price: '18.000',
	img: 'https://images.pexels.com/photos/8556262/pexels-photo-8556262.jpeg?cs=srgb&dl=pexels-lisa-fotios-8556262.jpg&fm=jpg'
});

function render(arr) { //declaramos función
	for (product of productList) { //Loop para mostrar los objetos del Array productList

		const productCard = document.createElement('div'); //Creamos div y lo guardamos en variable
		productCard.classList.add('product-card'); // le asignamos una clase

		const productImg = document.createElement('img'); // Creamos img y lo guardamos en variable
		productImg.setAttribute('src', product.img); // le asignamos la url dinámica que viene de los objetos product -> productList
		productImg.classList.add('productList-img'); // le asignamos una clase


		const productInfo = document.createElement('div'); //Creamos div y lo guardamos en variable
		productInfo.classList.add('product-info'); // le asignamos una clase

		const productInfoDiv = document.createElement('div'); //Creamos div y lo guardamos en variable

		const productPrice = document.createElement('p'); //Creamos parrafo y lo guardamos en variable
		productPrice.append('$' + product.price); // le asignamos valor dinámic0 que viene de los objetos product -> productList + Texto complementario

		const productName = document.createElement('p'); //Creamos parrafo y lo guardamos en variable
		productName.append(product.name); // le asignamos valor dinámic0 que viene de los objetos product -> productList

		productInfoDiv.appendChild(productPrice); //agregamos parrafo al div  productInfoDiv
		productInfoDiv.appendChild(productName);  //agregamos parrafo al div  productInfoDiv

		const productFigure = document.createElement('figure'); //Creamos figura y lo guardamos en variable
		const productImgCart = document.createElement('img'); // Creamos img y lo guardamos en variable
		productImgCart.setAttribute('src', './img/icons/bt_add_to_cart.svg'); // le asignamos la url estatica de donde viene el icono

		productFigure.appendChild(productImgCart); //agregamos imagen al div  productFigure

		productInfo.appendChild(productInfoDiv); //agregamos div  al div  productInfo
		productInfo.appendChild(productFigure); //agregamos figura al div  productInfo

		productCard.appendChild(productImg); //agregamos imagen al div  productCard
		productCard.appendChild(productInfo); //agregamos div al div  productCard

		contenedorLista.appendChild(productCard); //agregamos div al div  contenedorLista
	}
}

render(productList); //llamamos función



menuEmail.addEventListener('click',toggDesktopMenu);
menuIco.addEventListener('click',toggMobileMenu);
carritoIco.addEventListener('click',toggCarrito);
flechaCarrito.addEventListener('click',toggCarrito);
productDetClose.addEventListener('click',closeProductInfo);



const productImg = document.querySelectorAll('.productList-img');
for (const pImg of productImg) { // se usa un for porque el selector es All
  pImg.addEventListener('click', function openProductInfo() {
    productDet.classList.remove('inactive');
    detalleCarrito.classList.add('inactive');
  });
}

function toggDesktopMenu() {
	menuDesk.classList.toggle('inactive');
}

function toggMobileMenu() {
	menuMobile.classList.toggle('inactive');
}

function toggCarrito() {
	detalleCarrito.classList.toggle('inactive');
    productDet.classList.add('inactive');
}



function closeProductInfo() {
	productDet.classList.add('inactive');
}


/*condicional para cerrar carrito cuando se abra el detalle y viceversa

function toggleDetails() {
	detalleCarrito.classList.remove('inactive');
	productDet.classList.add('inactive');
	
}*/
