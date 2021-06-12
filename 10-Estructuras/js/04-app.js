const dinero=500;
const totalAPagar=300;
const tarjeta  = true;
const cheque  = true;

if(dinero>=totalAPagar){
    console.log('Si podemos pagar');
}else if(cheque){
    console.log('Si puedo pagar con cheque');
}
else if(tarjeta){
    console.log('Si puedo pagar con tarjeta');
}else{
    console.log('No podemos pagar');
}