<template>
  <button @click="accionHijo" :disabled="desactivar">{{ texto }}</button>
</template>

<script>
export default {
  props: {
    texto: String,
    desactivar: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    accionHijo() {
      /* Ingresa a la accion o metodo padre del boton apretado  */
      this.$emit("accionPadre");
    },
  },
};
</script>
<style>
</style>