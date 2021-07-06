window.addEventListener('scroll',()=>{
    
    const premium =document.querySelector('.premium');
    /* getBouding muestra la ubicacion del objeto */
    const ubicacion = premium.getBoundingClientRect();
    if(ubicacion.top<100){
        console.log(ubicacion);
        console.log('El elemento ya esta visible');
    }else{
        console.log(ubicacion);
        console.log('El elemento no es visible');
    }
})