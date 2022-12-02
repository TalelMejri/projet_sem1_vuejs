<template>
        <div class="hello container py-5">
            <h1 class="mt-5 text-center">List Events :</h1>
            <div v-if="!loading"  class="mt-5 py-5 text-center" >
                <div class="spinner-border" role="status">
                    <span class="visually-hidden"></span>
                  </div>
            </div>
            <div v-else>
            <div class="row mb-4 d-flex justify-content-center py-3" >
           
               
              <div v-if="events==''" class="w-50">
                 <div class="alert alert-danger">
                     Empty Events
                 </div>
              </div>
              <div v-else v-for="event in events" :key="event.id" class="col-md-6 mb-2 ">
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
                            <router-link :to="'/event/' + event.id">
                                <button  class="btn btn-warning mx-2">Show</button>
                            </router-link>
                            <button @click="delete_event(event)" class="btn btn-danger">delete</button>
                        </div>
                    </div>
              </div>
            </div>
            </div>
    </div>
</template>

<script>
export default {
    
  name: "HelloWorld",
  data(){
      return{
        loading:false
      }
  },
  props:{
    events:Object
  },
  mounted(){
        setTimeout(()=>this.loading=true,2000)
    },
  methods:{
    delete_event(index){
        if(confirm("do you want delete this")){
            this.$emit('deleteevnt',index);
        }
    },

  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
