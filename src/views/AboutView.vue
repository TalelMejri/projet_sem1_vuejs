<template>
  <div class="about">
    
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
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
.about{
  overflow: hidden;
  width: 100vw;
  position: relative;
}
</style>
