const producto = {
    nombre : "Franco zambelli",
    precio : 300,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}
const resultado = Object.assign(producto,medidas);
const resultado2 = {...producto,...medidas};

console.log(resultado2);