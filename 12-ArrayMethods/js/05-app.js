const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
let resultado1;
carrito.forEach((producto)=>{
    if(producto.nombre=='Tablet'){
        resultado1=producto;
    }
})
console.log(resultado1);
/* Retorna el primer valor que encuentra */
let resultado = carrito.find(producto=>producto.nombre=='Tablet');
console.log(resultado);