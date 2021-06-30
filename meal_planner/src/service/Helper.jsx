import axios from 'axios';

const helper_url= "http://localhost:8010/meal_helper";

class HelperService {
    getHelper(){
        return axios.get(helper_url)
   }
   postHelper(input){
    return axios.post(helper_url, input)
   }
}
export default new HelperService();