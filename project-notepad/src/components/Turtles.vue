<template>
    <router-link :to="{path:'/SchermataModifica', params:{title:title,text:text}} " id="turtleLink" class="">
        <fieldset id="turtle" class="shadow-sm container py-2 px-3">
            <legend>{{title}}</legend>
            <p><b>{{text}}</b></p>
        </fieldset>
    </router-link>
</template>

<script>

export default {
    props:{
        title:String,
        text:String
    }

    
}
</script>

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
        overflow-x:hidden ;
    }

</style>