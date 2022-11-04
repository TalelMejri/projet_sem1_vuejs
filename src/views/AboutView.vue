<template>
    <div class="contact">
      <div class="container-fluid py-5">
          <div class="d-flex py-5 justify-content-center">
            <div class="col-xl-12 col-lg-9 container">
            <div class="row  rounded shadow-lg p-5">
                <div class="col-lg-2 border-end">
                     <!--<button class="btn btn-primary" @click="start">Start</button>
                     <button  class="btn btn-primary" @click="stop">Stop</button>-->
                      <h1>Menu :</h1>
                      <div class="mt-5 py-4">
                          <label for="temp">Prix :</label><br />
                          <input type="range" id="temp" min="0" v-model="prix" max="200" step="1" name="temp" />
                          <input type="text" class="form-control" v-model="prix">
                      </div>

                      Select Your Kind OF Clothes :
                      <div class="d-flex flex-column gap-4 py-2">
                        <button @click="chose_all" class="btn btn-primary">All</button>
                        <button @click="chose_tshirt" class="btn btn-dark">T_shirt</button>
                        <button @click="chose_switer" class="btn btn-dark">switer</button>
                        <button @click="chose_hoodi" class="btn btn-dark">hoodi</button>
                        <button @click="chose_chaussete" class="btn btn-dark">chaussete</button>
                      </div>
                      <div>

                      </div>
                </div>
                <div class="col-lg-10 text-center">
                      <all_proudct :our_products="myproject" :select_name="select_name" ></all_proudct>
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
  import Vue from 'vue';
  import VueConfetti from 'vue-confetti'
  Vue.use(VueConfetti)
 export default{
  data(){
    return{
      prix:0,
      select_name:'',
      our_products: {
            T_shirt: [
               {id:1,name:'T-Shirt 1',src:' /store/t-shirt (2).jpg',quantity:15,Prix:150,favorite:0},
               {id:2,name:'T-Shirt 2',src:' /store/t-shirt (3).jpg',quantity:15,Prix:200,favorite:0},
               {id:3,name:'T-Shirt 3',src:' /store/t-shirt (4).jpg',quantity:15,Prix:180,favorite:0},
               {id:4,name:'T-Shirt 3',src:' /store/t-shirt.jpg',quantity:15,Prix:100,favorite:0},
            ],
            switer: [
               {id:5,name:'sweater 1',src:  '/store/maryoul.jpg',quantity:15,Prix:50,favorite:0},
               {id:6,name:'sweater 2',src: '/store/switer.PNG',quantity:15,Prix:60,favorite:0},
            ],
            hoodi: [
               {id:7,name:'hoodi 1',src: '/store/capuche.jpg',quantity:15,Prix:15,favorite:1},
               {id:8,name:'hoodi 2',src: '/store/hoodi.jpg',quantity:15,Prix:20,favorite:0},
               {id:9,name:'hoodi 2',src: '/store/hoodie.jpg',quantity:15,Prix:25,favorite:0},
            ],
            chaussete: [
               {id:10,name:'chaussete 1',src:  '/store/socks_blue.jpg',quantity:15,Prix:10,favorite:1},
               {id:11,name:'chaussete 2',src: '/store/socks_green.jpg',quantity:15,Prix:12,favorite:0},
            ],
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
       chose_all(){
        this.select_name='';
       },
       chose_tshirt(){
        this.select_name="T_shirt";
       },

       chose_switer(){
         this.select_name="switer";
       },

       chose_hoodi(){
        this.select_name="hoodi";
       },

       chose_chaussete(){
        this.select_name="chaussete";
       }

   },
   components:{
     all_proudct
   },
   computed:{
      myproject(){
            if(this.select_name==""){
               
                return this.our_products;

             }else{
              return this.our_products[''+this.select_name+''];
            } 
         }
        }
    
  }
</script>
<style scoped>

</style>
