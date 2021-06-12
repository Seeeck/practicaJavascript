const producto = {
    nombre : "Franco zambelli",
    precio : 300,
    disponible : true,
    mostrarInfo : function(){
        console.log(`El producto: tiene un precio de : ${this.precio}`);
    }
}
producto.mostrarInfo();