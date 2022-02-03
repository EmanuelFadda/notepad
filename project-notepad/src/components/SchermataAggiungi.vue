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
            <a href="schermataIniziale2.html" id="saveLink">
                <div class="container text-center p-3">
                    <h5>Save :)</h5>
                </div>
            </a>
        </div>
    </div>
</template>

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
    #saveLink{
        text-decoration:none;
        color: #0C5959;
    }
    #saveLink div{
        border-radius:15px;
        background-color: rgba(121, 153, 217, 0.5);
    }
</style>