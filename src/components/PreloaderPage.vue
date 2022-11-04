<template>
    <div v-if="show_loading" class="loading">
        <p class="content-preloader">
           <span>V</span>
           <span>U</span>
           <span>E</span>
           <span>JS</span>
        </p>
        <div class="add">Tp Premier Semester </div>
    </div>
</template>

<script>
export default{
  name:'PreloaderPage',
    data(){
        return{
            show_loading:true
        }
    },
    mounted(){
        setTimeout(()=>this.show_loading=false,20);
    }

}
</script>

<style>
.add{
  position: absolute;
 text-align: center;
 margin-left: 100px;
 font-weight: 600;
  margin-top:700px;
}
.loading{
    background-image: linear-gradient(to right , #42B883,#35495E);
    height: 100vh;
    z-index: 99999;
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
  
  .loading.enter-out{
    display: none;
  }
  
  .content-preloader span{
   color: rgb(242, 242, 242);
   font-size: 4rem;
   height: fit-content;
   font-weight: 500;
   animation: enter-bizo 1s linear forwards;
   opacity: 0;
   padding: 0;
   margin: 0 1.5rem;
  }
  
  @keyframes enter-bizo {
    0%{
        opacity: 0;
        transform: rotateX(100deg);
        filter: blur(4px);
    }
  
    100%{
        opacity: 1;
        transform: rotateX(0);
        filter: blur(0);
    }
  }
  
  .content-preloader span:nth-child(1){
    animation-delay: .8s;
  }
  
  .content-preloader span:nth-child(2){
    animation-delay: 2s;
  }
  
  .content-preloader span:nth-child(3){
    animation-delay: 3s;
  }
  
  .content-preloader span:nth-child(4){
    animation-delay: 4s;
  }
  
  .content-preloader span:nth-child(5){
    animation-delay: 5s;
  }
  
  @media screen and (max-width:768px) {
    .content-preloader span{
        font-size: 1rem;
     }
  }
</style>