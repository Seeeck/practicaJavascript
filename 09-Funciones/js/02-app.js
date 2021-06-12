/* Primero se escanean las funciones luego se pueden llamar */
sumar();
function sumar(){
    console.log(2+2);
}


sumar2();
/* No se escanea al principio por que es una variable */
const sumar2 = function(){
    console.log(3+3);
}
