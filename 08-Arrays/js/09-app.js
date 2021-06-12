const carrito = [
    {nombre: 'Monitor 21 pulgadas', precio :100},
    {nombre: 'Monitor 22 pulgadas', precio :200},
    {nombre: 'Monitor 23 pulgadas', precio :300},
    {nombre: 'Monitor 24 pulgadas', precio :400},
    {nombre: 'Monitor 25 pulgadas', precio :500},
    {nombre: 'Monitor 26 pulgadas', precio :600},
]

/* for(let i=0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
} */

/* Array methods */
/* Es un metodo de un objecto=funcion de un objeto */
carrito.forEach( function(producto){
    console.log(`${producto.nombre} tiene un precio de $${producto.precio}`);
});



