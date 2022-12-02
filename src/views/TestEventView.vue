<template>
    <div>
        <listesvent :events="events" @deleteevnt="deleteevnt"></listesvent>
    </div>
</template>

<script>

import listesvent from "@/components/Eventcard.vue";
import service from '@/services/EventService.js';

export default{
  name:'TestEventView',
  data(){
   return {
    events:[],
    ApiClient:0,
   }
  }, 
  components:{
     listesvent
  },
  created(){
    service.getEvents().then((response)=>{
        this.events=response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
  },
  methods:{
    
    deleteevnt(event){
       let item=this.events.find((v)=>v.id==event.id);
       let i=this.events.indexOf(item);
       this.events.splice(i,1);
    },

  }
}
</script>
