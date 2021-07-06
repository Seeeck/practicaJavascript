<template>
  <h2>Tipo de cuenta:{{ cuenta }}</h2>
  <h2>Saldo: {{ saldo }}</h2>
  <h2>Cuenta {{ estado ? "Activa" : "Desactivada" }}</h2>
  <div v-for="(servicio, index) in servicios" :key="index">
    {{ index }} {{ servicio }}
  </div>
  <!-- @accion es un custom events permite que el hijo acceda al metodo indicado del padre -->
  <AccionSaldo texto="Aumentar saldo" @accionPadre="aumentar" />
  <!-- creo una variable :desactivar y desactivar es un dato solamente -->
  <AccionSaldo texto="Disminuir saldo" @accionPadre="disminuir" :desactivar="desactivar" />
</template>

<script>
import AccionSaldo from "./AccionSaldo.vue";
export default {
  components: {
    AccionSaldo,
  },
  data() {
    return {
      saldo: 1000,
      cuenta: "Visa",
      estado: false,
      servicios: ["giro", "abono", "transferencia"],
    };
  },
  methods: {
    aumentar() {
      this.saldo += 100;
      this.desactivar=false
    },
    disminuir() {
        if(this.saldo>0){
            this.saldo -= 100;
            if(this.saldo==0){
                this.desactivar=true
            }
        }else{
            alert("No tiene saldo uwu")
        }
      
    },
  },
};
</script>

<style>
</style>