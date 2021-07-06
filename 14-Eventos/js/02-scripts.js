const nav = document.querySelector('.navegacion');

//Registrar un evento
nav.addEventListener('mouseout',()=>{
    console.log('saliendo a la navegacion');
    nav.style.backgroundColor='red'; 
})

//mousedown -similar a click
//click
//