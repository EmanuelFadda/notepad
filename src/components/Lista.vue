<template>
    <div id="lista" class="mt-4">
        <Turtles v-for="turtle in turtles" :key="turtle" :title="turtle.title" :text="turtle.text"/>
    </div>
</template>
<style scoped>
   /* #lista{

    }*/
</style>
<script>
import Turtles from './Turtles.vue'

export default{
    components:{
        Turtles
    },
    data(){
        return{
            turtles:[
            {
                title: 'aaa',
                text: 'aaaaaaaaaaaaaaaaaaaa',
            },
            {
                title:'genofevvo',
                text:'baaakk'
            },
            {
                title:'b',
                text:'b'
            },
            {
                title:'b',
                text:'b'
            },
            {
                title:'b',
                text:'b'
            },
            {
                title:'b',
                text:'b'
            },
        ]
        }


    },
}


</script>
