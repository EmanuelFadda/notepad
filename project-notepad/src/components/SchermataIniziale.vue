<template>
    <div class="container py-2">
        <div class="row" id="scritte" style="color:#7999D9">
            <div class="col-1 pr-0"><hr></div>
            <div class="col-auto py-1"><h6>there's x turtles</h6></div>
            <div class="col pl-0"><hr></div>
        </div>
        <Contenuto/>
        <PulsanteAggiungi/>
    </div>
</template>


<style>
    hr{
        height: 2px;
        background-color: #7999D9;
        border: none;
    }
</style>

<script>
import Contenuto from './Contenuto.vue'
import PulsanteAggiungi from './PulsanteAggiungi.vue'
export default {
  components:{
    Contenuto,
    PulsanteAggiungi
  }
}
</script>