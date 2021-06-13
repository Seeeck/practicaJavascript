const puntaje = 450;

function revisarPuntaje(){
    /* el return es para que se termine la ejecucion */
    if(puntaje > 400){
        console.log('Excelente');
        return;
    }

    if(puntaje > 300){
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisarPuntaje();