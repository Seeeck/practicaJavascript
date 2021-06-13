const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2=['Agosto','Septiembre'];
const meses3=meses.concat(meses2,'Otro mes');
console.log(meses3);

/* Spred operator */
const resultado2=[...meses,...meses2,'Otromes'];
console.log(resultado2);