
import axios from "axios";

const ApiClient=axios.create({
     baseURL:'https://my-json-server.typicode.com/TalelMejri/api_calls',
     withCredentials:false,
     headers:{
        accept:"application/json",
        "content-type":"application/json"
     },
})

export default{
    getEvents(){
        return ApiClient.get('/events');
    },
    
    getEventByid(id){
        return ApiClient.get('/events/'+id);
    },
  

}

