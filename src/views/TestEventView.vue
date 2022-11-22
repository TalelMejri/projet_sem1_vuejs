<template>
    <div>
        <listesvent :events="events" @deleteevnt="deleteevnt"></listesvent>
    </div>
</template>

<script>
import axios from "axios";
import listesvent from "@/components/Eventcard.vue";
export default{
  name:'TestEventView',
  data(){
   return {
    events:[]
   }
  }, 
  components:{
    listesvent
  },
  created(){

axios.get('https://my-json-server.typicode.com/TalelMejri/api_calls/events').then(
  response=>{
    console.log(response.data);
    this.events=response.data;
  }
).catch(response=>{
  console.log(response);
})
},
methods:{
deleteevnt(event){
      let item=this.events.find((v)=>v.id==event.id);
       let i=this.events.indexOf(item);
       this.events.splice(i,1);
}
}
}
</script>
