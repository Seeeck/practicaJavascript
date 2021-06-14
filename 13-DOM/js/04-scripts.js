/* Retorna maximo un elemento */
const elemento=document.querySelector('.card');
console.log(elemento);

/* Podemos tener selectores especificos como css */
/* Selecciona info de premium , no cualquier info */
const info = document.querySelector('.premium .info');
console.log(info);

/* Seleccionar segundo card de hospedaje */

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

const navegacion = document.querySelector('nav')
console.log(navegacion);