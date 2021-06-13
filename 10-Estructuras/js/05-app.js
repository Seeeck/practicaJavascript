/* Switch case */
const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        console.log(`pagaste con ${metodoPago}`)
        break;
    case 'cheque':
        console.log('Pagaste con chueque');
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago');
}