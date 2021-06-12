const carrito = [];
//Definir un producto

const producto = {
    nombre:"Monitor 32 pulgadas",
    precio : 400
}
const producto2 = {
    nombre:"celular",
    precio : 400
}
const producto3 = {
    nombre:"teclado",
    precio : 50
}

carrito.push(producto);
carrito.push(producto2);
/* Agregar producto al inicio del arreglo */
carrito.unshift(producto3);
console.table(carrito);

