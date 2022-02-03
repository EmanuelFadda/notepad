<template>
    <div id="schermataIniziale" class="container py-2">
        <div class="row" id="scritte">
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
    #schermataIniziale{
        width:100%;
        height:100%;
    }
    .row{
        color:#7999D9;
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