const pendientes = ['Tarea','Comer','Proyecto','Estudiar Javascript'];

/* variable e indice */
pendientes.forEach((pendiente,indice)=>console.log(`${pendiente} ${indice}`));

/*  */

const carrito = [
    {nombre: 'Monitor 21 pulgadas', precio :100},
    {nombre: 'Monitor 22 pulgadas', precio :200},
    {nombre: 'Monitor 23 pulgadas', precio :300, descuento:true},
    {nombre: 'Monitor 24 pulgadas', precio :400},
    {nombre: 'Monitor 25 pulgadas', precio :500},
    {nombre: 'Monitor 26 pulgadas', precio :600},
]

carrito.forEach((producto,indice)=>console.log(`${producto.nombre} ${indice}`))