<template>
    <div class="contact py-5">
        <div class="container-fluid py-5 " >
            <div class="d-flex py-5 justify-content-center">
                <div class="col-xl-8 col-lg-9">
                    <div class="row shadow-lg p-5 rounded">
                        <div class="col-lg-6">
                            <h1>Add Your Reveiw :</h1>
                            <form @submit.prevent="onsubmit">
                                
                                <label>Name :</label>
                                <input type="text" class="form-control mb-2">

                                <label>email :</label>
                                <input type="text" class="form-control mb-2">

                                <label>Message : </label>
                                <textarea class="form-control mb-2"  cols="30" rows="10">
                                </textarea>

                                <div class="text-center">
                                    <button class="btn btn-outline-success">Add</button>
                                </div>

                            </form>
                        </div>
                        <div class="col-lg-6  d-none d-lg-block text-center">
                            <img src="../assets/contact.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
img{
    width: 100%;
    height: 100%;
}
</style>