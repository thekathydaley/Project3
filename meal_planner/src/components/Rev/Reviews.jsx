import React, { Component } from 'react';
import ReviewBox from './ReviewBox';


class Reviews extends Component {
    constructor() { //required for a state along with super
        super()
        this.state = { //to begin a state
            userInput: '', //empty string
            name: "",
            review: "",
                  
        }
    }
    yourName = (input) => {
        this.setState({
            userInput: input
        },
            () => console.log(input)
        )
    }

    changeReview = (input) => {
        this.setState({
            userInput: input
        },
            () => console.log(input)
        )
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

            <ReviewBox/> 

            {/* <img src={} width="500" height="350" /> */}

            </div>
        );
    }
}

export default Reviews;