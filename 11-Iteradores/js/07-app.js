const pendientes = ['Tarea','Comer','Proyecto','Estudiar Javascript'];

const carrito = [
    {nombre: 'Monitor 21 pulgadas', precio :100},
    {nombre: 'Monitor 22 pulgadas', precio :200},
    {nombre: 'Monitor 23 pulgadas', precio :300, descuento:true},
    {nombre: 'Monitor 24 pulgadas', precio :400},
    {nombre: 'Monitor 25 pulgadas', precio :500},
    {nombre: 'Monitor 26 pulgadas', precio :600},
]

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto  of carrito ){
    console.log(producto.nombre);
}