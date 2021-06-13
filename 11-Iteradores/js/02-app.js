/* for (let i = 0; i <= 10; i++) {
    if(i===5){
        console.log("CINCO");
        continue;
    }
    console.log(`Numero ${i}`)
} */

/* Continue rompe el ciclo actual y sigue el siguiente */

const carrito = [
    {nombre: 'Monitor 21 pulgadas', precio :100},
    {nombre: 'Monitor 22 pulgadas', precio :200},
    {nombre: 'Monitor 23 pulgadas', precio :300, descuento:true},
    {nombre: 'Monitor 24 pulgadas', precio :400},
    {nombre: 'Monitor 25 pulgadas', precio :500},
    {nombre: 'Monitor 26 pulgadas', precio :600},
]

for(let i=0;i<=carrito.length;i++){
    if(carrito[i].descuento){
        console.log(`El producto ${carrito[i].nombre} esta en descuento`);
        continue;
    }
    console.log(`${carrito[i].nombre}`);
}




