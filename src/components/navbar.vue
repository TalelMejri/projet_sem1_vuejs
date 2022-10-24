<template>
  <nav data-aos="fade-down" data-aos-delay="90" class="mb-5 navbar navbar-expand-lg text-uppercase fixed-top ">
    <div class="container">
        <div class="circle position-absolute">
            <span style="--i:11"></span>
            <span style="--i:12"></span>
            <span style="--i:24"></span>
            <span style="--i:10"></span>
            <span style="--i:24"></span>
            <span style="--i:23"></span>
            <span style="--i:18"></span>
            <span style="--i:16"></span>
            <span style="--i:19"></span>
            <span style="--i:20"></span>
            <span style="--i:22"></span>
            <span style="--i:25"></span>
            <span style="--i:18"></span>
            <span style="--i:21"></span>
            <span style="--i:15"></span>
            <span style="--i:13"></span>
            <span style="--i:26"></span>
            <span style="--i:17"></span>
            <span style="--i:13"></span>
            <span style="--i:28"></span>
            <span style="--i:17"></span>
         </div>
        <a class="navbar-brand" href="##">Bizo</a>
        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div  class="collapse navbar-collapse justify-content-center mx-5" id="navbarResponsive">
            <ul class="navbar-nav text-center  p-2">
                
              
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link text-center px-0 px-lg-3 rounded" href="#portfolio"><router-link to="/">Home</router-link> </a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link text-center px-0 px-lg-3 rounded" href="#service">  <router-link to="/about">About</router-link></a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link text-center px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
</template>

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
    background-image: url(@/assets/hero-bg.png);
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