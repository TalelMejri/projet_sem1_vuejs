<template>
  <div class="navbar">
  <nav class="mb-5 navbar navbar-expand-lg text-uppercase fixed-top ">
    <div class="container">
        <a class="navbar-brand" href="##">Vue Shop</a>
        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div  class="collapse navbar-collapse justify-content-center mx-5" id="navbarResponsive">
            <ul class="navbar-nav text-center  p-2">
              <li class="nav-item mx-0 mx-lg-1"><router-link to="/"><a class="nav-link text-center px-0 px-lg-3 rounded" href="#portfolio">    <i  class="material-icons mx-2"> home</i> Home </a></router-link> </li>
              <li class="nav-item mx-0 mx-lg-1"><router-link to="/about"><a class="nav-link text-center px-0 px-lg-3 rounded" href="#service">    <i  class="material-icons mx-2"> store</i> Store</a></router-link></li>
              <li class="nav-item mx-0 mx-lg-1"><router-link to="/contact"><a class="nav-link text-center px-0 px-lg-3 rounded" href="#contact">    <i  class="material-icons mx-2"> reviews</i> Contact </a></router-link></li>
            </ul>
        </div>
    </div>
</nav>
</div>
</template>

<style>
router-link a{
  text-decoration: none  !important;
}
 
.navbar ul li a{
  /* */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: #4fc3dc;
  text-decoration: none;
  transition: 0.3s;
 }


  .navbar {
    position: relative;
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
  
  

</style>