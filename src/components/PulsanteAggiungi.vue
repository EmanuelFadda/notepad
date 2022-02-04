<template>
    <div style="" id="pulsanteAggiungi" class="p-2">
        <router-link to="SchermataAggiungi"><img src="../assets/image/add_black_24dp.svg" id="imageAdd"></router-link>
    </div>
</template>


<style scoped>
    #pulsanteAggiungi{
        position:fixed;
        bottom:20px;
        right:20px;
        border-radius: 15px;
        min-width: 50px;
        min-height: 50px;
        background-color: rgba(121, 153, 217, 0.7);
    }
    #imageAdd{
        width:50px; 
        height:50px;
    }
</style>