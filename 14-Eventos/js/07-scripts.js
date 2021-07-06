
/* Delegation para ñie */
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click',(e)=>{
    console.log(e.target.classList);
    if(e.target.classList.contains('titulo')){
        console.log('diste click en titulo');
    }

    if(e.target.classList.contains('precio')){
        console.log('diste click en precio');
    }

    if(e.target.classList.contains('info')){
        console.log('diste click en info');
    }
});