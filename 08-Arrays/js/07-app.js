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
const producto4 = {
    nombre:"celular 2",
    precio : 50
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);

// /* Eliminar ultimo elemento al final del arreglo */
// console.table(carrito);

// /* Eliminar el primer el emento del arreglo */
// carrito.shift();
// console.table(carrito);

// /* Eliminar el ultimo elemento delc carrito */
// carrito.pop();
console.table(carrito);

/* Elimina elementos consecuutivos desde el primer paramatro de posicion */
carrito.splice(1,2);
console.table(carrito);



