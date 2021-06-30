import React, { Component } from 'react';
import ReviewBox from './ReviewBox';
import ReviewService from '../../service/Review';


class Reviews extends Component {
    constructor() { //required for a state along with super
        super()
        this.state = { //to begin a state
            userInput: '', //empty string
            name: "",
            review: "",
            list: [],

        }
    }
    componentDidMount(){
        ReviewService.getReview().then((response)=>{
            this.setState({
                list: response.data,
            })
        })
    }

    changeName = (input) => {
        this.setState({
            name: input
        },
            () => console.log(input)
        )
    }

    changeReview = (input) => {
        this.setState({
            review: input
        },
            () => console.log(input)
        )
    }
    addToList = () => {
        let comment = {
            name: this.state.name,
            review: this.state.review
        }
        console.log(comment)
        const array= this.state.list;
        array.push(comment);
        this.setState({
            list: array,
        })
        console.log(array);
        ReviewService.postReview(comment)
    
    }

    render() {
        return (
            <div className="container">
                <input type="text"
                    placeholder="Enter Your Name"
                    value={this.state.name}
                    onChange={
                        (event) => {
                            this.changeName(event.target.value)
                        }} />
                <input type="text"
                    placeholder="Enter Your Review"
                    value={this.state.review}
                    onChange={
                        (event) => {
                            this.changeReview(event.target.value)
                        }} />
                <button onClick={() => this.addToList()}>
                    Thank you for your review!</button>
                <div className='inputStyle'>
                    <ul>

                        {this.state.list.map((itemInTheList) => {
                            return <li>
                                Name: {itemInTheList.name}<br/>
                                Review: {itemInTheList.review}
                            </li>

                        })}
                    </ul> 
                </div>

                <ReviewBox />

                {/* <img src={} width="500" height="350" /> */}

            </div>
        );
    }
}

export default Reviews;