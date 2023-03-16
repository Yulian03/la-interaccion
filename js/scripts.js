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
nuevoEnlace.textContent = 'Tienda virtual';

//Agregar la clase
nuevoEnlace.classList.add ('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);     //permite agregar una variable e insertarla a otra

console.log (nuevoEnlace);

//Eventos

// console.log(1);

// window.addEventListener ('load', function () { //load espera a que los JS y los archivos que dependen del HtML esten listos
//     console.log(2);
// });

// window.onload = function (){
//     console.log(3); 
// }

// document.addEventListener('DOMContentLoaded', function () { //DOMContentLoaded solo espera por el HTML, pero no espera por css o imagenes
//     console.log(4)
// });

// console.log(5);

// window.onscroll = function(){
//     console.log('scrolling...');
// }

//Seleccionar elementos y asociarles un evento 

// const btnEnviar = document.querySelector ('.boton--primario')
// btnEnviar.addEventListener ('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();  //Especial para formularios siempre

//     //Validar un formulario

//     console.log('enviando formulario');
// });




//Eventos de los input y texarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre =document.querySelector('#nombre');
const email =document.querySelector('#email');
const mensaje =document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

 //El evento de submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar el formulario

    const { nombre, email, mensaje} = datos;

    if (nombre === '' || email ==='' || mensaje === ''){
        mostrarAlerta ('Todos los campos son obligatorios', true);

        return; //Corta la ejecucion del codigo
    }

    //Crear la alerta de Enviar el formulario correctamente

    mostrarAlerta('Mensaje enviado correctamente');
});

    function leerTexto (e){
        // console.log(e.target.value);
        datos[e.target.id] = e.target.value;
        // console.log(datos);
    }

 function mostrarAlerta (mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent =mensaje; 

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    //Desaparezca despues de 5 segundos 
    setTimeout(() => {
        alerta.remove();
    }, 5000);
 }

