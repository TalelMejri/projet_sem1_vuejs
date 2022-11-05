<template>
    <div>
        <contact :listReview="listReview" @add_review="add_review" @start_message="start_message" :afficher_message="afficher_message"></contact>
    </div>
</template>

<script>
import contact from "@/components/contact.vue";

 export default{
    data(){
        return{
            listReview:[],
            afficher_message:false
        }
    },
    components:{
        contact
    },
    methods:{
        add_review(review){
            this.listReview.push(review);
        },
        start_message(){
            this.afficher_message=true;
            setTimeout(()=>this.afficher_message=false,3000);
        }
    }
 }
</script>

<style scoped>


</style>