<template>
    <div id="lista" class="mt-4">
        <Turtles v-for="turtle in turtles" :key="turtle"/>
    </div>
</template>

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
                title: 'a',
                text: 'a',
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
            }
        ]
        }


    },
}


</script>
