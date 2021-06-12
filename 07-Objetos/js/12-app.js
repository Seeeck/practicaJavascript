// Object Literal
const producto = {
    nombre : "Franco zambelli",
    precio : 300,
    disponible : true,
}

//Object Constructor

function Producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=true;
}

let producto1 = new Producto('television 32',5000);
console.log(producto1.precio);