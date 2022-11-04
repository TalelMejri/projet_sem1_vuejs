<template>
    <div class="contact py-3">
        <div class="container-fluid py-2 " >
            <div class="d-flex py-5 justify-content-center">
                <div class="col-xl-8 col-lg-9">
                    <div class="row shadow-lg p-5 rounded">
                        <div class="col-lg-6">
                            <h1>Add Your Reveiw :</h1>
                                <form @submit.prevent="Onsubmit">
                                    <transition name="fade" mode="in-out">
                                        <toast v-if="afficher_message"></toast>
                                    </transition>
                                    <div class="row">
                                        <div class="col-md-6">
                                    <label>Name :</label>
                                    <input  class="form-control" type="text" v-model="name">
                                </div>
                                <div class="col-md-6">
                                    <label>Email :</label>
                                    <input  class="form-control" type="email" v-model="email">
                                </div>
                                    </div>
                                    <label>Messages :</label>
                                    <textarea  class="form-control" name="" id="" cols="30" rows="10"  v-model="message"></textarea>
                                    <div class="row py-2">
                                        <div class="col-md-6">
                                    <label for="rating">Evaluation :</label>
                                    <select  class="form-control" id="rating" v-model.number="rating">
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="recommand">do you want  this produit ?</label>
                                    <select class="form-control"  id="recommand" v-model.number="recomende">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit"  class="btn btn-outline-primary mt-4 mb-2">Send   </button>
                                    <div >
                                        <button  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" class="btn btn-info" :disabled="listReview.length==0">Check All Review  </button>
                                    </div>
                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                        <div class="offcanvas-header">
                                          <h5 id="offcanvasRightLabel">All Review</h5>
                                          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <div v-for="review in listReview" :key="review.id" class="card">
                                                    <div class="card-header">
                                                       Name : {{review.name}}
                                                    </div>
                                                    <div class="card-body">
                                                         <div class="card-text">
                                                             Email :{{review.email}}
                                                         </div>
                                                         <div class="card-text">
                                                            Messages :{{review.message}}
                                                        </div>
                                                        <div class="card-text">
                                                            <span v-for="star in review.rating" :key="star.id">
                                                                <i  class="material-icons mx-2 text-waring"> star</i>
                                                            </span>
                                                        </div>
                                                        <div class="card-text">
                                                            Recomande :{{review.recomende ? 'recommande with success' : 'Non' }}
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                      </div>
                                </div>
                          </form>
                        </div>
                        <div class="col-lg-6  d-none d-lg-block text-center">
                            <img src="../assets/contact.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import toast from "@/components/toast.vue";
 export default{
    data(){
        return{
            recomende:null,
            rating:null,
            message:'',
            email:'',
            name:''
        }
    },
    components:{
        toast
    },
    props:{
        listReview:Array,
        afficher_message:Boolean
    },
    methods:{
        Onsubmit(){
            if(this.recomende==null && this.rating ==null && this.message=="" && this.email=="" && this.name==""){
                this.$emit("start_message");
            }else{
                let all_response={
                    name:this.name,
                    email:this.email,
                    message:this.message,
                    rating:this.rating,
                    recomende:this.recomende
                };
                this.$emit("add_review",all_response);
                this.name='';
                this.email='';
                this.message='';
                this.rating=null;
                this.recomende=null;
            }
        }
    }
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
form{
    position: relative;
}
img{
    width: 100%;
    height: 100%;
    filter: drop-shadow(2px 4px 6px rgb(156, 154, 154));
    box-shadow: none;
   -webkit-box-shadow: none;
}
</style>