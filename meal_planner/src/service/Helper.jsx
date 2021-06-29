import axios from 'axios';

const helper_url= "http://localhost:8010/meal_helper";

class HelperService {
    getHelper(){
        return axios.get(helper_url)
   }
   postHelper(thing){
    return axios.post(helper_url, thing)
   }
}
export default new HelperService();