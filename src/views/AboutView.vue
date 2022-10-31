<template>
    <div class="contact">
      <div class="container-fluid py-5 " >
          <div class="d-flex py-5  ">
            <button class="btn btn-primary" @click="start">Start</button>
            <button  class="btn btn-primary" @click="stop">Stop</button>
          </div>
      </div>
  </div>
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
