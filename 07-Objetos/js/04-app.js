const producto = {
    nombre : "Franco zambelli",
    precio : 300,
    disponible : true
}

/* const nombre = producto.nombre;

console.log(nombre); */

/* DESTRUCTURING */
const {nombre,precio,disponible} = producto;
console.log(disponible);
