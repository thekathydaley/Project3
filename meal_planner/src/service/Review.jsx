import axios from 'axios';

const review_url= "http://localhost:8010/review";

class ReviewService {
    getReview(){
        return axios.get(review_url)
   }
   postReview(comment){
    return axios.post(review_url, comment)
   }
}
export default new ReviewService();