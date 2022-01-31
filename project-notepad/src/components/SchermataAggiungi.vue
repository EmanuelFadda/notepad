<template>
    <div class="container py-2">
        <div id="form" style="min-height:800px; background-color: #AAFEC7; border-radius: 20px;" class="container px-3 py-3 my-0 border-0">
            <div class="row md-2">
                <router-link to="/" class="col-2 text-center" style="border-right: 1px solid #0C5959;" href="schermataIniziale.html">
                    <img src="../assets/image/arrow_back_black_24dp.svg">
                </router-link>
                <div class="col-auto">
                </div>
            </div>
            <div class="form-group my-3">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title">
            </div>
            <div class="form-group my-3">
                <label for="text">Text</label>
                <textarea class="form-control" style="min-height: 500px;" id="text"></textarea>
            </div>
            <br>
            <a href="schermataIniziale2.html" style="text-decoration:none;color: #0C5959;">
                <div class="container text-center p-3" style="border-radius:15px;background-color: rgba(121, 153, 217, 0.5);">
                    <h5>Save :)</h5>
                </div>
            </a>
        </div>
    </div>
</template>