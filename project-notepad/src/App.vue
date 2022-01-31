<template>
  <div id="app">
    <SchermataIniziale/>
  </div>
</template>

<script>
import SchermataIniziale from './components/SchermataIniziale.vue' //importare il component che si intende usare all'interno del component

export default {
  name: 'App',
  components: {
    SchermataIniziale    //se metti qualsiasi component dentro a un components segui sintassi da linea 11 fino a 16
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  background-color: #124141;
}
</style>
