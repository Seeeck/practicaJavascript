<template>
  <h1>
      {{texto}}
  </h1>
</template>

<script>
export default {
    /* El titulo para que no de error en consola */
    name:'Titulo',
    props:{
        texto: String
    }

}
</script>
/* Scoped solo para el template */
<style scoped>
h1{
    color:peru;
}
</style>