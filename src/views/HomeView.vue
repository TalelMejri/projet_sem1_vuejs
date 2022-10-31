<template>
  <div class="home">
          <div class="container-fluid py-5 " >
              <div class="d-flex py-5  ">
                  <div class="col-xl-12 col-md-12 col-lg-12 py-5">
                      <div class="row py-5">
                              <div class="col-lg-6 py-5" >
                                  <div class="py-4  text-center">
                                  <div >
                                    <div class="intro_text">
                                      <h1 >You Make the World a better Place </h1>
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
                                      <img src="../assets/intro.jpg"  data-aos="zoom-out" data-aos-delay="50" class="rounded img-thumbnail shadow-sm" width="400px" height="500px"  alt="">
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
}
</script>

<style>


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
