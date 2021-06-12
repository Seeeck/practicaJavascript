'use strict';

const producto = {
    nombre : "Franco zambelli",
    precio : 300,
    disponible : true
}

Object.freeze(producto);

/* producto.disponible=false;
producto.imagen = "imagen.jpg" */

console.log(Object.isFrozen(producto))

