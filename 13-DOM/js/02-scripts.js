//Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');
const hero=document.getElementsByClassName('hero');

console.log(hero);

/* Si las clases existen mas de una vez */
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

const no_existe= document.getElementsByClassName('no-existe');
console.log(no_existe);