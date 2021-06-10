const producto = "Monitor 20 pulgadas";

/* .replace para reemplazar */
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));

/* .slice para cortar */
console.log(producto.slice(0,10));
console.log(producto.slice(9));
console.log(producto.slice(2,1));

/* alternativas a slice */
/* si paso un numero mayor que el segundo se ordena automaticamente */
console.log(producto.substring(2,10));