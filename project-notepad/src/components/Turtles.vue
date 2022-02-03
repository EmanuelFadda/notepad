<template>
    <router-link id="turtleLink" class="" to="/SchermataModifica">
        <fieldset id="turtle" class="shadow-sm container py-2 px-3">
            <legend>titolo</legend>
            <p><b>testo</b></p>
        </fieldset>
    </router-link>
</template>

<style scoped>
    #turtleLink{
        text-decoration: none;
    }
    #turtle{
        min-width:300wp;
        min-height:100wp; 
        border-radius: 15px;
        background-color:rgba(12, 89, 89, 0.2);
        color:#0C5959;
    }
</style>