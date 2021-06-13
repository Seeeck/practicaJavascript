const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valo existe en un arreglo
meses.forEach((mes)=>{
    if(mes=='Enero'){
        console.log('Existe el mes de enero');
    }
});

/* Arreglo de un solo indice */
const resultado = meses.includes('Enero');
console.log(resultado);
/* Arreglo con objetos */
const resultado2 = carrito.some(producto=> producto.nombre === 'Teclado');
console.log(resultado2);

const existeMes = meses.some(mes=>mes=='Enero');
console.log(existeMes);