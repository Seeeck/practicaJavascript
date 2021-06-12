const reproductor = {
    reproducir : function(id){
        console.log('Reproduciendo cancion con el id '+id);
    },
    pausar : function(){
        console.log('Pausando....');
    },
    borrarCancion : function(id){
        console.log(`Borrando cancion ${id}`);
    },
    crearPlayList : function(nombre){
        console.log(`Creando playlist ${nombre}`);
    },
    reproducirPlayList : function(nombre){
        console.log(`Reproducioendo playlist ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrarCancion(40);
