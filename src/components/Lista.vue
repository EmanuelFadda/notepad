<template>
    <div id="lista" class="mt-4">
        <Turtles v-for="turtle in allTurtles" :key="turtle" :title="turtle.title" :text="turtle.text" />
    </div>
</template>
<style scoped>
   /* #lista{

    }*/
</style>
<script>
import Turtles from './Turtles.vue'
import script from '../script'
export default{
    components:{
        Turtles
    },
    data(){
        return{
             allTurtles : script.showAllTurtles(),
        }
    },

}


</script>
