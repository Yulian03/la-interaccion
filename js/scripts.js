//querySelector
const heading = document.querySelector('.header__texto h2')    //Retorna 0 o 1 elementos
//heading.textContent ='Nuevo Heading'  // para generar un cambio en el html
console.log(heading);

//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para Enlace';
enlaces [0].classList.add ('nueva-clase');
//enlaces [0].classList.remove('navegacion_enlace');



//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

//Agregar la clase
nuevoEnlace.classList.add ('navegacion__enlace');

console.log (nuevoEnlace);
