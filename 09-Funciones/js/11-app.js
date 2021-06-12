const aprendiendo = function(tecnologia){
    console.log('Aprendiendo '+tecnologia);
}
aprendiendo('Javascript')
/* se elimina function y llaves , hace un return */
const aprendiendo2 = (tecnologia,tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('js','node'));