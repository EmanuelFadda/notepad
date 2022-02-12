<template>
    <div id="all" class="container py-2">
        <div id="form" class="container px-3 py-3 my-0 border-0">
            <div class="row md-2">
                <router-link id="returnLink" to="/" class="col-2 text-center">
                    <img src="../assets/image/arrow_back_black_24dp.svg">
                </router-link>
                <div class="col-auto">
                </div>
            </div>
            <div class="form-group my-3">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title">
            </div>
            <div id="divText" class="form-group my-3">
                <label for="text">Text</label>
                <textarea class="form-control" id="text"/>
            </div>
            <br>        
            <div id="saveDiv" @click="saveDivMethods" class="container text-center p-3">
                <h5>Save :)</h5>
            </div>
        </div>
    </div>
</template>
<script>
import script from '../script'

export default {
    methods: {
        saveDivMethods: function(){
            let title= document.getElementById('title').value
            let text=document.getElementById('text').value
            let isTurtleComplete=(title!="" && text!="")
            if(isTurtleComplete){
                script.addTurtle(title,text)
                this.$router.go(-1)
            }
        }
    },

    
}



</script>

<style scoped>




    #all{
        height:100%;
        width:100%;
    }
    #form{
        height:100%;
        background-color: #AAFEC7;
        border-radius: 20px;
    }
    #returnLink{
        border-right: 1px solid #0C5959;
    }
    #divText{
        height:65%;
    }
    #text{
        height:90%;
    }
    #saveDiv{
        color: #0C5959;
        border-radius:15px;
        background-color: rgba(121, 153, 217, 0.5);
    }

</style>