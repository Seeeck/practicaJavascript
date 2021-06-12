
const producto = {
    nombre : "Franco zambelli",
    precio : 300,
    disponible : true
}
/* const nombre = producto.nombre;
console.log(nombre); */
/* DESTRUCTURING */
const {nombre} = producto;
/* console.log(nombre); */

/* Destructuring con arreglos */
const numeros =[10,20,30,40,50];
const [primero,,...tresUltimos] = numeros
console.log(tresUltimos);
