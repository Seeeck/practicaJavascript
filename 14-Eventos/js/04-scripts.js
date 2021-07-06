const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',validarFomulario)
function validarFomulario(e){
    /* prevent default previene el action por metodo psot */
    e.preventDefault();
    console.log('Cosultar a una api');
    console.log(e);
}