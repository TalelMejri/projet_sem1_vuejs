<template>
  <div id="app">
    <loading></loading>
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
 
  </div>
</template>
<script>
import loading from "@/components/PreloaderPage.vue";
import navbar from "@/components/navbar.vue";
export default{
  components:{
    loading,navbar
  }
}
   

</script>
<style scoped>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
#app{
  overflow-x: hidden;
  width: 100vw;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active,.fade-leave-active{
  transition: all .3s ease;
}



</style>
