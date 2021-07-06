const enlace = document.createElement('a');
/* Agregandole el texto */
enlace.textContent='Nuevo enlace'
enlace.href='/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('data-enlace','data-id');
enlace.classList.add('clase');
enlace.onclick=miFuncion;

/* Seleccionar la navegacion */
const navegacion =document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace,navegacion.children[1]);

function miFuncion (){
    alert('hola');
}

/* Crear un card */

const parrafo1 = document.createElement('p');
parrafo1.textContent='Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent='Concierto de Rock';
parrafo2.classList.add('titulo');
const parrafo3 = document.createElement('p');
parrafo3.textContent='$800 por persona';
parrafo3.classList.add('precio');

const info=document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen=document.createElement('img');
imagen.src='img/hacer2.jpg';

const card =document.createElement('div');
card.classList.add('card');

card.appendChild(imagen);
card.appendChild(info);


document.querySelector('.contenedor-cards').insertBefore(card,document.querySelector('.contenedor-cards').children[0]);