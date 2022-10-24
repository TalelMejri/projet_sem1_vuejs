<template>
  <div class="home">
      <header>
         
          <div class="container-fluid py-5 " >
              <div class="d-flex py-5  ">
                  <div class="col-xl-12 col-md-12 col-lg-12 py-5">
                      <div class="row py-5">
                              <div class="col-lg-6 py-5" >
                                  <div class="py-4  text-center">
                                  <div data-aos="fade-down" data-aos-delay="90">
                                    <div class="intro_text">
                                      <h1 >You Make the World a better Place </h1>
                                      <h2 >Just By being in it</h2>
                                          <h3>Join Us </h3>
                                          <div class="py-4 d-flex  justify-content-center">
                                              <div class="mx-4">
                                              <a  href=""><button  class="btn btn-outline-primary">Sign In</button></a>
                                              </div>
                                             <div  class=""> <a href=""><button class="btn btn-outline-info">Sign Up</button></a>  
                                            </div> 
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
      </header>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style>
.circle{
  display: flex;
  position:absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.circle span{
  position: relative;
  width: 30px;
  height: 30px;
  background-color: #4fc3dc;
  margin: 0 20px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #4fc3dc44,0 0 50px #4fc3dc,0 0 100px #4fc3dc;
  animation: animate 5s linear infinite;
  animation-duration: calc(125s/var(--i));
}

.circle span:nth-child(even){
  background-color: #ff2d75;
  box-shadow: 0 0 0 10px #ff2d75,0 0 50px #ff2d75,0 0 100px #ff2d75;
}

@keyframes animate {
  0%{
    transform: translateY(0) scale(0);
  }
  100%{ transform: translateY(100vh) scale(0.5);
  }
}

/********************************************/

/***** header **********************************/

header{
 height: 100vh;
}

header{
  background-image: url(../assets/hero-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

header ul li a{
 /* */
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 font-size: 18px;
 font-weight: 700;
 color: #4fc3dc;
 transition: 0.3s;
}

header ul li a.choise_link
{
  color: #ff2d75;
}

.navbar.sticky {
  background: #fff;
  padding: 10px;
  box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
  transition: 0.5s;
}

@media (min-width: 991px) {
  .navbar-nav {
      margin-left: 500px !important;
  }
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
