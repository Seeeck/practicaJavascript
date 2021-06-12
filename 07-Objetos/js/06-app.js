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

/* la segunda variable es pais */
const {nombre , informacion : {fabricacion : {pais}} } = producto;

console.log(pais);