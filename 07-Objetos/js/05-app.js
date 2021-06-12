const producto = {
    nombre : "Franco zambelli",
    precio : 300,
    disponible : true,
    informacion : {
        peso : '1kg',
        altura : '30cm',
        fabricacion :{
            pais : 'China'
        }
    }
}

console.log(producto.informacion.fabricacion.pais);
