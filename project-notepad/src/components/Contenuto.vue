<template>
     <div id="contenuto" style="height:95%;background-color: #D7FCCC; border-radius: 20px;" class="container px-3 py-3">
         <div v-if="!1>0">
             <Vuoto/>
         </div>
         <div v-else>
             <Lista/>
         </div>

    </div>
</template>

<script>
import Vuoto from './Vuoto.vue'
import Lista from './Lista.vue'

export default{
    components:{
        Vuoto,
        Lista
    }
}
</script>
