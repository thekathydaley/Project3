import React, { Component } from 'react';
import Item1 from './Item1'
import HelperService from '../../service/Helper';


class Grocery extends Component {
    constructor() { //required for a state along with super
        super()
        this.state = { //to begin a state
            userInput: '', //empty string
            name: "",
            quantity: 0,
            delete: true,
            list: [],
        }
    }
    //grabs the user input and sends into state

    changeUserInput = (input) => {
        this.setState({
            userInput: input
        },
            () => console.log(input)
        )
    }

    changeQuantity = (input) => {
        this.setState({
            quantity: input
        },
            () => console.log(input)
        )
    }
    //function to take the user input from state and add to the list
    addToList = () => {
        let thing = {
            name: this.state.name,
            quantity: this.state.quantity
        }
        console.log(thing)
        HelperService.postHelper(thing)
    }
    // addToList(){
    //         //need a variable to act as the list in state
    //         let name = this.state.name
    //         // listArray.push(input)
    //         this.setState({
    //             list : name,
    //             userInput : ''
    //         })
    //         HelperService().postHelper(name)
    //         console.log(name)
    // }

    // To delete


    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.userInput}
                    onChange={
                        (event) => {
                            this.changeUserInput(event.target.value)
                        }} />
                <input type="text"
                    value={this.state.quantity}
                    onChange={
                        (event) => {
                            this.changeQuantity(event.target.value)
                        }} />

                <button onClick={() => this.addToList(this.state.userInput, this.state.quantity)}>
                    Add An Item To The List</button>

                {/* <ul>
                        {this.state.list.map((itemInTheList)=>{
                        return<li>{itemInTheList}</li>
                     
                        })}
                    </ul> */}

                <Item1 item={this.state.list} />

            </div>

        );
    }
}

export default Grocery;

//two things in state: user input and array to push our new list items into