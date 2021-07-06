/* Event bubbling */
/* El evento se propaga */
const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

cardDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('Click en card');
})

infoDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('Click en infodiv');
})

titulo.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('Click en titulo');
})

