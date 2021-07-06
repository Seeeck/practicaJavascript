const btnFlotante=document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click',mostrarOcultarFooter);

function mostrarOcultarFooter(){
/* this es el btn flotante */
    if(!footer.classList.contains('activo')){
        footer.classList.add('activo');
        console.log(this);
    }else if(footer.classList.contains('activo')){
        footer.classList.remove('activo')
    }
}