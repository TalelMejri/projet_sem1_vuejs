<template>
  <div class="home">
          <div class="container-fluid py-5">
              <div class="d-flex py-5 justify-content-center">
                  <div class="col-xl-12 col-md-12 col-lg-12 py-5">
                      <div class="row py-5">
                              <div class="col-lg-6 py-5">
                                  <div class="py-4 text-center">
                                  <div >
                                    <div class="intro_text">
                                      <h1 ></h1>
                                      <h2 >Just By being in it</h2>
                                          <h3>Join Us </h3>
                                          <div class="py-4 d-flex  justify-content-center">
                                            <router-link to="/about">
                                                <button class="btn btn-outline-primary d-flex float-end">
                                                  <i  class="material-icons mx-2"> shopping_cart</i>
                                                     Magasin  
                                                </button>
                                            </router-link>   
                                          </div> 
                                    </div>
                                  </div>
                              </div>
                          </div>
                              <div class="col-lg-6 d-lg-block d-none text-center py-5">
                                <transition name="fade" mode="in-out">
                                         <img :src="all_image[i]" class="rounded img-thumbnail shadow-sm" width="400px" height="500px"  alt="">
                                </transition>
                            </div>    
                      </div>
                  </div>
              </div>
          </div>    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
 
  data(){
    return{
     i:0,
      all_image:[
       '/store/capuche.jpg',
       '/store/hoodi.jpg',
       '/store/hoodie.jpg',
       '/store/maryoul.jpg',
       '/store/switer.PNG',
       '/store/t-shirt (2).jpg',
       '/store/t-shirt (3).jpg',
       '/store/t-shirt (4).jpg',
       '/store/t-shirt.jpg',
      ]
    }
  },
  mounted(){
    setInterval(()=>this.i<this.all_image.length-1 ? this.i++ : this.i=0 ,3000);
  },
}
</script>

<style scoped>

.home{
 height: 97vh;
}

.home{
  background-image: url(../assets/hero-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.intro_text{
  color:#ff2d75;
}

.intro_text h3{
  color:#5995fd !important;
}

@media (max-width:500px) {
  h1,h3,h2{
    font-size:16px;
  }
}
</style>
