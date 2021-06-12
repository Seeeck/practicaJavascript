'use strict';

const producto = {
    nombre : "Franco zambelli",
    precio : 300,
    disponible : true
}
/* con seal si se puede modificar una propiedad pero no agregar una */
Object.seal(producto);

/* producto.disponible=false;
producto.imagen = "imagen.jpg" */

console.log(Object.seal(producto))

