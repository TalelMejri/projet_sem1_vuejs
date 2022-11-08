<template>
  <div>
    <div class="d-flex justify-content-center">
           <button :disabled="all_purchase.length==0" class="btn btn-dark mb-4 d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="material-icons mx-2">shopping_cart</i> 
              <span class="badge bg-dark text-white rounded-pill mt-1 mx-1">{{all_cart}}</span>
           </button>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">All Purchase</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
                   <div class="modal-body">
                            <div class="row d-flex justify-content-center my-4">
                              <div class="col-md-8">
                                  <div v-for="buy in all_purchase" :key="buy.id">
                                      <div v-if="buy.cart>0">
                                <div class="card mb-4">
                                  <div class="card-header py-3">
                                    <h5 class="mb-0">{{buy.name}}</h5>
                                  </div>
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                        <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                          <img :src="buy.src"
                                            class="w-100"  />
                                        </div>
                                      </div>
                                      <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        <p>Size: M</p>
                                        <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                                          title="Move to the wish list" @click="delete_product(buy.id)">
                                          <i  class="material-icons">delete</i>
                                        </button>
                                      </div>
                                      <div class="col-lg-4 ">
                                        <div class="d-flex" >
                                          <button @click="buy.cart--" class="btn btn-primary w-50"
                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                            <i  class="material-icons"> remove</i>
                                          </button>
                                          <div class="form-control">
                                            <input id="form1" min="0" name="quantity"  v-model="buy.cart" type="number" class="form-control" />
                                            <label class="form-label" for="form1">Quantity</label>
                                          </div>
                                          <button  @click="buy.cart++" class="btn btn-primary w-50"
                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                            <i  class="material-icons">add</i>
                                          </button>
                                        </div>
                                        <p class="text-start text-md-center py-4">
                                          <strong>{{buy.Prix}} $</strong>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                  </div>
                  <div class="col-md-4">
                      <div class="card mb-4">
                        <div class="card-header py-3">
                          <h5 class="mb-0">Summary</h5>
                        </div>
                        <div class="card-body">
                          <ul class="list-group list-group-flush">
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Products
                              <span>${{total}}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                              Shipping
                              <span>Gratis</span>
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                              <div>
                                <strong>Total amount</strong>
                                <strong>
                                  <p class="mb-0">(including VAT)</p>
                                </strong>
                              </div>
                              <span><strong>${{total}}</strong></span>
                            </li>
                          </ul>
                          <button @click="generate_pdf()" type="button" class="btn btn-primary btn-lg btn-block">
                            Go to checkout
                          </button>
                        </div>
                      </div>
                      </div>
             </div>
           
          </div>
          <div class="modal-footer">
            <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="select_name==''">
       <div v-for="(our_product) in our_products" :key="our_product.name">
          <div class="row d-flex justify-content-center  container p-4">
              <div class="col-lg-4 " v-for="our1 in our_product" :key="our1.id">
                  <div class="card mb-5">
                      <div  class="card-body container">
                         <p class="card-header">{{our1.name}}</p>
                         <div class="box-container">
                             <div class="box">
                                 <img :class="{disabledimage:our1.quantity==0}" :src="our1.src"  :alt="our1.name">
                                 <div class="content">
                                     <i style="cursor:pointer" @click="changer_favorite(our1)"  :class=" our1.favorite ? 'text-danger material-icons mx-2' : 'material-icons mx-2' "> favorite</i> 
                                     <h3>{{our1.name}}</h3>
                                     <p>{{our1.quantity}}(available)   <br> {{our1.Prix}} dt</p>
                                 </div>
                             </div>
                         </div>
                         <div>
                              <button :disabled="our1.quantity==0" @click="addcart(our1)" class="btn btn-outline-success">Add</button>
                              <button  :disabled="our1.cart==0"   @click="delete_cart(our1)" class="btn btn-outline-danger mx-2"> Delete </button>
                         </div>
                     </div>
                 </div>
              </div>
      </div>
       </div>
      </div>
      <div v-else> 
          <div >
              <div class="row d-flex justify-content-center  container p-4">
                  <div class="col-lg-4 " v-for="our1 in our_products" :key="our1.id">
                      <div class="card mb-5">
                          <div  class="card-body container">
                             <p class="card-header">{{our1.name}}</p>
                             <div class="box-container">
                                 <div class="box">
                                     <img :class="{disabledimage:our1.quantity==0}" :src="our1.src"  :alt="our1.name">
                                     <div class="content">
                                         <i style="cursor:pointer" @click="changer_favorite(our1)"  :class=" our1.favorite ? 'text-danger material-icons mx-2' : 'material-icons mx-2' "> favorite</i> 
                                         <h3>{{our1.name}}</h3>
                                         <p>{{our1.quantity}}(available)  <br> {{our1.Prix}} dt</p>
                                     </div>
                                 </div>
                             </div>
                             <div>
                                  <button  :disabled="our1.quantity==0" @click="addcart(our1)" class="btn btn-outline-success">Add</button>
                                  <button  :disabled="our1.cart==0"  @click="delete_cart(our1)" class="btn btn-outline-danger mx-2"> Delete </button>
                             </div>
                         </div>
                     </div>
                  </div>
          </div>
          </div>
      </div>
      </div>
</template>


<script>
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import Vue from 'vue';
import VueConfetti from 'vue-confetti';
import $ from 'jquery';
Vue.use(VueConfetti);
export default {
  
  name:'all_product',
  data(){
      return{
          all_purchase:[],
          quantity:0,
          heading:"Your Facture",
  }
},
  props:{
      our_products:Array,
      select_name:String
  },
  mounted(){
        console.log(this.all_purchase);
  },
  methods:{
    generate_pdf(){
      $(" [data-bs-dismiss=modal] ").trigger({ type : "click" });
      this.$confetti.start();
      setTimeout(()=> this.$confetti.stop(),5000);
      const doc = new jsPDF({
        orientation:"portrait",
        unit:"in",
        format:"letter"
      });
        doc.text(this.heading,3.5,0.4);// (message,horizontale,vertical)
        var total_payment="Total amount :"+this.total+" Dt ";
        doc.text(total_payment,3.4,0.7);
        autoTable(doc, { html: '#my-table' }) 
        this.all_purchase.forEach((v)=>{
        var val= v.id;
        var name=v.name;
        var quantity=v.cart;
        autoTable(doc, {
          head: [['Id', 'Name', 'Quantity']],
          body: [
            [val, name, quantity],
          ],
      })
      })  

      doc.save(`${Math.random()}.pdf`);
      for(let i=0;i<this.all_purchase.length;i++){
         this.all_purchase.splice(this.all_purchase[i],1);
      }
    },
      delete_product(product){
          if(confirm('do you want delete this product ?')){
             let item=this.all_purchase.find((v)=>v.id==product);
             let i=this.all_purchase.indexOf(item);
             this.all_purchase.splice(i,1);
          }
      },
      addcart(tab){
          if(tab.quantity>0){
              tab.quantity--;
              tab.cart++;
            let item=this.all_purchase.find((v)=>v.id==tab.id);
            if(!item){
              this.all_purchase.push(tab);
            }
            console.log(this.all_purchase);
          }
      },
      delete_cart(tab){
          if(tab.cart > 0){
              tab.quantity++;
              tab.cart--;
              
          }
      },
      changer_favorite(tab){
           tab.favorite = tab.favorite == 1 ? 0 :1;
       }
  },
  computed:{ 
    total(){
      let all_prix=0;
      this.all_purchase.forEach((e)=>{
          all_prix+=(e.Prix*e.cart);
      });
      return all_prix;
    },
    all_cart(){
      let all_prix=0;
      this.all_purchase.forEach((e)=>{
          all_prix+=e.cart;
      });
      return all_prix;
    }
  },
}
</script>


<style scoped>
.fade-enter-from{
  opacity: 0;
  transform: translateY(-60px);
}
.fade-enter-to{
  opacity: 1;
  transform: translateY(0);
}
.fade-enter-active{
  transform: all .3s ease;
}
.fade-leave-from{
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-to{
  opacity: 0;
  transform: translateY(-60px);
}
.fade-leave-active{
    transform: all .3s ease;
  }
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