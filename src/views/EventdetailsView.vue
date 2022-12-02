<template>
    <div class="hello container py-5">
        <h1 class="mt-5 text-center">List Events :</h1>        
        <div v-if="this.event==''">
            <div class="alert alert-danger">
                 empty 
            </div>
        </div>
        <div v-else class="row mb-4 d-flex justify-content-center py-3" >
                <div class="card ">
                     <div class="card-header text-center">
                       {{event.category + event.id}}
                     </div>
                     <div class="card-body w-100 text-center font-weight-bold">
                      <div class="card-text">  {{event.category }} </div>
                      <div class="card-text">  {{event.title}}</div>
                      <div class="card-text">  {{event.description}}</div>
                      <div class="card-text">  {{event.location}}</div>
                      <div class="card-text">  {{event.time}}</div>
                     </div>
                     <div class="p-3 float-end">
                        <router-link to="/testevent">
                            <button  class="btn btn-warning mx-2">List Events</button>
                        </router-link>
                        <button @click="delete_event(event)" class="btn btn-danger">delete</button>
                    </div>
                </div>
          </div>
        </div>
</template>

<script>
import service from "@/services/EventService.js";
 export default{

    created(){
        this.id = this.$route.params.id;
        service.getEventByid(this.id).then((contenu)=>{
            this.event=contenu.data;
        }).catch((error)=>{
            console.log(error);
        })
    },
    name:'Eventdetails',
    data(){
        return{
            id:0,
            event:null,
          
        }
    },
    methods:{
    
    }
 }
</script>