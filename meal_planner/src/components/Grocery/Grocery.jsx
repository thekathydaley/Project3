import React, { Component } from 'react';
import Item1 from './Item1'
import HelperService from '../../service/Helper';


class Grocery extends Component {
    constructor() { //required for a state along with super
        super()
        this.state = { //to begin a state
            userInput: '', //empty string
            name: "",
            quantity: '',
            delete: true,
            list: [],
        }
    }
    //grabs the user input and sends into state

    changeUserInput = (input) => {
        this.setState({
            name: input
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
        const array= this.state.list;
        array.push(thing);
        this.setState({
            list: array,
        })
        console.log(array);
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
            <div className="container">
                    <input type="text"
                    placeholder="How Many?"
                    value={this.state.quantity}
                    onChange={
                        (event) => {
                            this.changeQuantity(event.target.value)
                        }} />
                <input type="text"
                    placeholder="What item?"
                    value={this.state.name}
                    onChange={
                        (event) => {
                            this.changeUserInput(event.target.value)
                        }} />
                <button onClick={() => this.addToList()}>
                    Add An Item To The List</button>
                
                <div className='inputStyle'>
                <ul>    

                        {this.state.list.map((itemInTheList)=>{
                        return<li>
                            Quantity: {itemInTheList.quantity}  |  Item Name: {itemInTheList.name}
                            </li>
                     
                        })}
                    </ul>   
                </div>

                {/* <ul>
                        {this.state.list.map((itemInTheList)=>{
                        return<li>{itemInTheList}</li>
                     
                        })}
                    </ul> */}

                {/* <Item1 item={this.state.list} /> */}

            </div>
            

        );
    }
}

export default Grocery;

//two things in state: user input and array to push our new list items into