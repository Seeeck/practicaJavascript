const reproductor = {
    cancion : '',
    reproducir : id => console.log('Reproduciendo cancion con el id '+id),
    pausar : () => console.log('Pausando....'),
    borrarCancion : id => console.log(`Borrando cancion ${id}`),
    crearPlayList : nombre =>console.log(`Creando playlist ${nombre}`),
    reproducirPlayList : nombre =>console.log(`Reproducioendo playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion=cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`Cancion ${this.cancion}`);
    }  
}

reproductor.nuevaCancion = "Don't let me down";
reproductor.obtenerCancion;
