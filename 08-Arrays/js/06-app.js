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
/* Se crea un objecto */
/* FORMA IMPERATIVA */
carrito.push(producto2);
/* FORMA DECLARATIVA */
let resultado = [...carrito,producto];
resultado = [producto3,...resultado,producto2];
console.log(resultado);
