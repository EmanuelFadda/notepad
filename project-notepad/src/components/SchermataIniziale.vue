<template>
    <div class="container">
        <div class="row" id="scritte" style="color:#7999D9">
            <div class="col-1 pr-0"><hr></div>
            <div class="col-auto py-1"><h6>there's x turtles</h6></div>
            <div class="col pl-0"><hr></div>
        </div>
        <Contenuto/>
        <div style="position:fixed;bottom:20px;right:20px;border-radius: 15px; min-width: 50px; min-height: 50px; background-color: rgba(121, 153, 217, 0.9);" id="pulsanteAggiungi" class="p-2">
            <a href="schermataAggiungi.html"><img width="50px" height="50px" src="img/add_black_24dp.svg"></a>
        </div>
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
import Contenuto from 'Contenuto.vue'
export default {
  name: 'SchermataIniziale',
  component:{
      Contenuto
  }
}
</script>