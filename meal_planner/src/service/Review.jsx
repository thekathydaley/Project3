import axios from 'axios';

const review_url= "http://localhost:8010/review";

class HelperService {
    getReview(){
        return axios.get(review_url)
   }
   postHelper(comment){
    return axios.post(review_url, comment)
   }
}
export default new ReviewService();