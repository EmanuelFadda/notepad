<template>
     <div id="contenuto" class="container px-3 py-3">
         <div v-if="isEmpty">
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
    },
    data(){
        return{
            isEmpty: localStorage.getItem(1)===null
        }
        
    }
}
</script>

<style scoped>
    ::-webkit-scrollbar{
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(12, 89, 89, 0.5); 
        border-radius: 10px;
        
    }
    ::-webkit-scrollbar-track-piece:end {
        
        margin-bottom: 10px; 
    }

    ::-webkit-scrollbar-track-piece:start {
        margin-top: 10px;
    }
    
    #contenuto{
        height:95%;
        background-color: #D7FCCC; 
        border-radius: 20px;
        overflow-y: scroll ;
        direction: rtl;
    }

</style>