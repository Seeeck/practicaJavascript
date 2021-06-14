const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);
/* console.log(encabezado.innerText)//Si en css visibility es hidden no se ve
console.log(encabezado.textContent)//Si muestra el texto
console.log(encabezado.innerHTML)//Trae el html

document.querySelector('.contenido-hero h1').textContent="nuevo Heading";
 */

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';