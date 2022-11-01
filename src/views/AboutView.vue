<template>
    <div class="contact">
      <div class="container-fluid py-5">
          <div class="d-flex py-5 justify-content-center">
            <div class="col-xl-12 col-lg-9 container">
            <div class="row  rounded shadow-lg p-5">
                <div class="col-lg-2 border-end">
                <!-- <button class="btn btn-primary" @click="start">Start</button>
                     <button  class="btn btn-primary" @click="stop">Stop</button>--> 
                      <h1>Menu :</h1>
                      <div class="mt-5 py-4">
                          <p>price :</p>
                          <input class="w-50 form-control mb-2" type="text" placeholder="Max Price" v-model="prix">
                          <button class="btn btn-outline-warning">Search</button>
                      </div>
                      <div>

                      </div>
                </div>
                <div class="col-lg-10 text-center">
                      <all_proudct :our_products="our_products" ></all_proudct>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
      <!--  -->
</template>

<script>
  import all_proudct from "../components/all_products.vue";
  import Vue from 'vue'
  import VueConfetti from 'vue-confetti'
  Vue.use(VueConfetti)
 export default{
  data(){
    return{
      prix:0,
      our_products: {
          t_shirt: {
            T_shirt: [
               {id:1,name:'T-Shirt 1',src:' /store/t-shirt (2).jpg',quantity:15,Prix:100,favorite:0},
               {id:2,name:'T-Shirt 2',src:' /store/t-shirt (3).jpg',quantity:15,Prix:100,favorite:0},
               {id:3,name:'T-Shirt 3',src:' /store/t-shirt (4).jpg',quantity:15,Prix:100,favorite:0},
               {id:4,name:'T-Shirt 3',src:' /store/t-shirt.jpg',quantity:15,Prix:100,favorite:0},
            ],
          },

          switer: {
            switer: [
               {id:5,name:'switer 1',src:  '/store/maryoul.jpg',quantity:15,Prix:100,favorite:0},
               {id:6,name:'switer 2',src: '/store/switer.PNG',quantity:15,Prix:100,favorite:0},
            ],
          },

          capuche: {
            hoodi: [
               {id:7,name:'switer 1',src:  '/store/capuche.jpg',quantity:15,Prix:100,favorite:1},
               {id:8,name:'switer 2',src: '/store/hoodi.jpg',quantity:15,Prix:100,favorite:0},
               {id:9,name:'switer 2',src: '/store/hoodie.jpg',quantity:15,Prix:100,favorite:0},
            ],
          },

          chaussete  : {
            chaussete: [
               {id:10,name:'chaussete 1',src:  '/store/socks_blue.jpg',quantity:15,Prix:100,favorite:1},
               {id:11,name:'chaussete 2',src: '/store/socks_green.jpg',quantity:15,Prix:100,favorite:0},
            ],
          },

        }
      }
  },
   methods:{
    start() {
      this.$confetti.start();
		 },

     	stop() {
      	 this.$confetti.stop();
    	 },

   
   },
   components:{
    all_proudct
   },
   computed:{

   }
 }
</script>
<style>

</style>
