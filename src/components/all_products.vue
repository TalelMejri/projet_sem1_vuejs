<template>
    <div>
      <div class="d-flex justify-content-center">
             <button class="btn btn-dark mb-4 d-flex">
                <i class="material-icons mx-2">shopping_cart</i> 
                <span class="badge bg-dark text-white rounded-pill mt-1 mx-1">{{cart}}</span>
             </button>
     </div>
         <div v-for="(our_product,index) in our_products" :key="our_product.name">
                <div  v-for="our in our_product" :key="our.name">
                    <div class="card mb-5">
                        <p class="card-header">{{index}}</p>
                    <div class="row container"> 
                     <div  class="card-body col-lg-4" v-for="our1 in our" :key="our1.id">
                        <div class="box-container">
                            <div class="box">
                                <img :class="{disabledimage:our1.quantity==0}" :src="our1.src" width="" alt="">
                                <div class="content">
                                    <i style="cursor:pointer" @click="changer_favorite(our1)"  :class=" our1.favorite ? 'text-danger material-icons mx-2' : 'material-icons mx-2' "> favorite</i> 
                                    <h3>{{our1.name}}</h3>
                                    <p>{{our1.quantity}}(available)  <br> {{our1.Prix}} dt</p>
                                </div>
                            </div>
                        </div>
                        <div>
                             <button :disabled="our1.quantity==0" @click="addcart(our1)" class="btn btn-outline-success">Add</button>
                             <button @click="delete_cart(our1)" class="btn btn-outline-danger mx-2">Delete</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>


<script>
export default {
    
    name:'all_product',
    data(){
        return{
            cart:0,
        }
    },
    props:{
        our_products:Object
    },
    methods:{
        addcart(tab){
            if(tab.quantity>0){
                tab.quantity--;
                this.cart++;
            }
        },
        delete_cart(tab){
            if( this.cart>0){
                tab.quantity++;
                this.cart--;
            }
        },
        changer_favorite(tab){
           /* for(let i=0;i<this.our_products.length;i++){
                let index=this.our_products[i].find((v)=>v.id==tab);
                console.log(index);
             }*/
             tab.favorite = tab.favorite == 1 ? 0 :1;
         }
   
    }   
}
</script>


<style scoped>
.disabledimage{
    filter: grayscale(1500) !important;
}
 .box-container{
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
  }
  
   .box-container .box{
    height:15rem;
    flex:1 1 30rem;
    border:1rem solid #fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border-radius: .5rem;
    position: relative;
    overflow: hidden;
  }
  
   .box-container .box img{
    height:100%;
    width:100%;
    object-fit: cover;
  }
  
   .box-container .box .content{
    position: absolute;
    top:-100%; left:0;
    height: 100%;
    width:100%;
    background:rgba(255,255,255,.9);
    padding:2rem;
    padding-top: 2rem;
    text-align: center;
  }
  
   .box-container .box .content h3{
    font-size:18px;
    color:#000;
  }
  
   .box-container .box .content p{
    font-size: 18px;
    color:#000;
    padding:1rem 0;
  }
  
   .box-container .box:hover .content{
    top:0;
  }
  
</style>