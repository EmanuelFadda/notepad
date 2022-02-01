<template>
    <div style="width:100%;height:100%" class="container py-2">
        <div id="form" style="width:100%;height:100%; background-color: #AAFEC7; border-radius: 20px;" class="container px-3 py-3 border-0">            <div class="row md-2">
            <router-link to="/" class="col-2 text-center" style="border-right: 1px solid #0C5959;">
                <img src="../assets/image/arrow_back_black_24dp.svg">
            </router-link>
            <div style="text-align: center;" class="col">
                 <input id="title" type="text" style="text-align:center;border:none;color:#0C5959;" value="title">
            </div>
        </div>
        <div style="height:75%" class="form-group my-3">
            <label for="text">Text</label>
            <textarea style="height:90%" class="form-control" id="text"></textarea>
        </div>
        <div id="buttonDownload" v-on:click="startDownload()" class="container p-2 text-center my-3" style="border-radius: 15px; background-color: #7999D9; color:#0C5959" >
            save on .txt file
        </div>
        <div class="row">
            <div class="container col text-center mx-2" style="border-radius: 15px;background-color: rgba(255, 0, 0, 0.6);">
                <a href="schermataIniziale.html">
                    <img width="50px" src="../assets/image/delete_white_24dp.svg">
                </a>
            </div>
            <div class="container col text-center mx-2" style="border-radius: 15px;background-color: #117821;">
                <a href="schermataIniziale2.html">
                    <img width="50px" src="../assets/image/done_white_24dp.svg">
                </a>
            </div>
        </div>
        </div>

    </div>
</template>


<script>

export default({
    methods: 
        {
            startDownload: function() {
                let text=document.getElementById('text').value;
                let title=document.getElementById('title').value;
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                element.setAttribute('download', title);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            },


        },



        

})

</script>
