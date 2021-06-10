const producto = {
    nombre : "Franco zambelli",
    precio : 300,
    disponible : true
}

/* Se agrega una propiedad con . */
producto.imagen = "imagen.jpg";
delete producto.precio;

console.log(producto);
