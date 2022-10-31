<template>
    <div class="contact">
      <div class="container-fluid py-5 " >
          <div class="d-flex py-5 justify-content-center">
            <div class="col-xl-12 col-lg-9 container">
            <div class="row  rounded shadow-lg p-5">
                <div class="col-lg-2 border-end">
                      <h1>Menu :</h1>
                      <div>
                          <p>price :</p>
                          <input type="range" value="50">
                      </div>
                      <div>

                      </div>
                </div>
                <div class="col-lg-10 text-center">
                      <div>
                           <h1 class="text-center">T-shirt</h1>

                      </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
      <!--<button class="btn btn-primary" @click="start">Start</button>
            <button  class="btn btn-primary" @click="stop">Stop</button>-->
</template>

<script>
  import Vue from 'vue'
  import VueConfetti from 'vue-confetti'
  Vue.use(VueConfetti)
 export default{
  
   methods:{
    start() {
      this.$confetti.start();
		 },

     	stop() {
      	 this.$confetti.stop();
    	 },

   
   },
   computed:{

   }
 }
</script>
<style>
 
</style>
