<template>
    <div class="contact">
      <div class="container-fluid py-5">
          <div class="d-flex py-5 justify-content-center">
            <div class="col-xl-12 col-lg-9 container">
            <div class="row  rounded shadow-lg p-5">
                <div class="col-lg-2 border-end">
                      <h1 class="mb-5">Menu :</h1>
                      <div class="mt-5 py-4">
                          <label for="temp">Prix :</label><br />
                          <input type="range" id="temp" min="0" v-model="prix" max="60" step="1" name="temp" />
                          <input type="text" class="form-control" v-model="prix">
                      </div>
                      Select Your Kind OF Clothes :
                      <div class="d-flex flex-column gap-4 py-2">
                        <button @click="chose_option('')" class="btn" :class="select_name=='' ? 'btn-primary' :'btn-dark'">All</button>
                        <button @click="chose_option('T_shirt')" class="btn" :class="select_name=='T_shirt' ? 'btn-primary' :'btn-dark'">T_shirt</button>
                        <button @click="chose_option('sweater')" class="btn" :class="select_name=='sweater' ? 'btn-primary' :'btn-dark'">sweater</button>
                        <button @click="chose_option('hoodi')" class="btn" :class="select_name=='hoodi' ? 'btn-primary' :'btn-dark'">hoodi</button>
                        <button @click="chose_option('chaussete')" class="btn" :class="select_name=='chaussete' ? 'btn-primary' :'btn-dark'">chaussete</button>
                      </div>
                </div>
                <div class="col-lg-10 text-center">
                      <all_proudct @sortby="sortby" :our_products="myproject" :select_name="select_name" :prix="prix" ></all_proudct>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  import all_proudct from "../components/all_products.vue";
  import Vue from 'vue';
  import VueConfetti from 'vue-confetti';
  Vue.use(VueConfetti);
 export default{
  data(){
    return{
      prix:0,
      do_sort_by_product:0,
      prod_ord:{},
      select_name:'',
      our_products: {
            T_shirt: [
               {id:1,name:'T-Shirt 1',src:' /store/t-shirt (2).jpg',quantity:5,Prix:10,favorite:0,  cart:0},
               {id:2,name:'T-Shirt 3',src:' /store/t-shirt (3).jpg',quantity:10,Prix:11,favorite:0 , cart:0},
               {id:3,name:'T-Shirt 4',src:' /store/t-shirt (4).jpg',quantity:9,Prix:12,favorite:0 , cart:0},
               {id:4,name:'T-Shirt 5',src:' /store/t-shirt.jpg',quantity:15,Prix:13,favorite:0 , cart:0},
            ],
            sweater: [
               {id:5,name:'sweater 1',src:  '/store/maryoul.jpg',quantity:15,Prix:50,favorite:0 , cart:0},
               {id:6,name:'sweater 2',src: '/store/switer.PNG',quantity:15,Prix:60,favorite:0 , cart:0},
            ],
            hoodi: [
               {id:7,name:'hoodi 1',src: '/store/capuche.jpg',quantity:15,Prix:15,favorite:1 , cart:0},
               {id:8,name:'hoodi 2',src: '/store/hoodi.jpg',quantity:15,Prix:20,favorite:0 , cart:0},
               {id:9,name:'hoodi 3',src: '/store/hoodie.jpg',quantity:15,Prix:25,favorite:0 , cart:0},
            ],
            chaussete: [
               {id:10,name:'chaussete 1',src:  '/store/socks_blue.jpg',quantity:15,Prix:10,favorite:1 , cart:0},
               {id:11,name:'chaussete 2',src: '/store/socks_green.jpg',quantity:15,Prix:12,favorite:0 , cart:0},
            ],
        }
      }
  },
   methods:{
    sortby(){
      this.do_sort_by_product=1;
    },
    chose_option(select){
      this.do_sort_by_product=0;
         this.select_name=select;
    },
   },
   components:{
     all_proudct
   },
   computed:{
      myproject(){
          //
          this.prod_ord=JSON.parse(JSON.stringify(this.our_products));
          if(this.select_name == ""){
              //  console.log("dddd"+this.prod_ord);
             if(this.do_sort_by_product==1){
               // console.log("dddd sort"+this.prod_ord);
               for(const property in this.prod_ord){
                       this.prod_ord[property].sort((a,b)=>a.Prix>b.Prix ? -1 : 1);
                  }
                }
               return {...this.prod_ord};
            }
           else{
               console.log("fff "+this.prod_ord[this.select_name]);
               if(this.do_sort_by_product==1){
                 console.log("fff sort"+this.prod_ord[this.select_name]);
                    return {...this.prod_ord[''+this.select_name+''].sort((a,b)=>a.Prix>b.Prix ? -1 : 1)}; 
               }  
                    return {...this.prod_ord[''+this.select_name+'']};
            }   
          }
               /*if(this.prix!=0){
                 for(let property in this.our_products){
                   for(let i=0;i<this.our_products[property].length;i++){
                       if(this.our_products[property][i].Prix >= this.prix){
                         return this.our_products[property];
                       }
                   }
                  //  for(let variant of this.our_products[property]){
                  //     console.log(variant.Prix);
                  //  }
                 }  
                }*/
    }
  }


  
</script>
<style scoped>

</style>
