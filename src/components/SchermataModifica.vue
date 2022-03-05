<template>
    <div id="schermataModifica" class="container py-2">
        <div id="form" style="" class="container px-3 py-3 border-0">            
            <div class="row md-2">
                <router-link id="returnLink" to="/" class="col-2 text-center">
                    <img src="../assets/image/arrow_back_black_24dp.svg">
                </router-link>
                <div id="titleDiv" class="col">
                    <input id="title" type="text" :value="title">
                </div>
            </div>
            <div id="textDiv" class="form-group my-3">
                <label for="text">Text</label>
                <textarea :value="text" class="form-control" id="text"></textarea>
            </div>
            <div id="buttonDownload" v-on:click="startDownload()" class="container p-2 text-center my-3">
                save on .txt file
            </div>
            <div class="row">
                <div id="deleteDiv" class="container col text-center mx-2">
                    <a href="schermataIniziale.html">
                        <img id="deleteImage" src="../assets/image/delete_white_24dp.svg">
                    </a>
                </div>
                <div @click="updateTurtle()"  id="doneDiv" class="container col text-center mx-2">
                    <img id="doneImage" src="../assets/image/done_white_24dp.svg">
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
    #schermataModifica{
        width:100%;
        height:100%;
        overflow-x: hidden ;
    }
    #form{
        width:100%;height:100%; 
        background-color: #AAFEC7; 
        border-radius: 20px;
    }
    #returnLink{
        border-right: 1px solid #0C5959;
    }
    #titleDiv{
        text-align: center;
    }
    #title{
        text-align:center;
        border:none;
        color:#0C5959;
    }
    #textDiv{
        height:75%;
    }
    #text{
        height:90%;
    }
    #buttonDownload{
        border-radius: 15px; 
        background-color: #7999D9; 
        color:#0C5959
    }
    #deleteDiv{
        border-radius: 15px;
        background-color: rgba(255, 0, 0);
    }
    #deleteImage{
        border-radius: 15px;
        width:50px;
    }
    #doneDiv{
        border-radius: 15px;
        background-color: #117821;
    }
    #doneImage{
        width:50px;
    }
</style>

<script>
//import script from '../script'
export default{
    name: 'SchermataModifica',
    props: {
        title: String,
        text: String,
    },
    methods: 
        {
            startDownload: function() {
                let textElementValue=document.getElementById('text').value;
                let titleElementValue=document.getElementById('title').value;
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textElementValue));
                element.setAttribute('download', titleElementValue);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            },
            updateTurtle : function(){
                let textElementValue=document.getElementById('text').value;
                let titleElementValue=document.getElementById('title').value;
                let turtleSelected=JSON.parse(localStorage.getItem(this.$vnode.key+1))
                let turtle={
                        title:titleElementValue,
                        text:textElementValue
                }
                let isTheSameTurtle=(turtleSelected==turtle)
                if(!isTheSameTurtle){
                    alert(this.$vnode.key) //is undefined
                    localStorage.setItem(this.$vnode.key+1,JSON.stringify(turtle))
                    this.$router.go(-1)
                }
            }
            
        }
        
}
</script>
