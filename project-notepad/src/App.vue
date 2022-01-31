<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
 //importare il component che si intende usare all'interno del component
export default {
  name: 'App',
  components: {
       //se metti qualsiasi component dentro a un components segui sintassi da linea 11 fino a 16
    
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  background-color: #124141;
  width: 100%;
  height: 100%;
}
</style>
