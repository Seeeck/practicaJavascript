//Variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail')

/* Varibales para campos */
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje= document.querySelector('#mensaje')


eventListeners();
function eventListeners(){
    /* Cuando la app arranca */
    document.addEventListener('DOMContentLoaded',iniciarApp);
    /* Campos del formulario */
    asunto.addEventListener('blur',validarFormulario);
    email.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

}

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.className.add = ('cursor-not-allowed','opacity-50');
}

function validarFormulario(e){
    if(e.target.value.length >0){
        console.log('Hay algo')
    }else{
        e.target.classList.add('border','border-red-500');
        mostrarError();
    }
}

function mostrarError(){
    const mensajeError=document.createElement('p');
    mensajeError.textContent="Todos los campos son obligatorios";
    mensajeError.classList.add('border','border-red-500','background-color-100','text-red-500','p-3','error');
    const errores = document.querySelectorAll('.error')
    if(errores.length === 0){
        formulario.insertBefore(mensajeError,document.querySelector('.mb-10'));
    }
    
}