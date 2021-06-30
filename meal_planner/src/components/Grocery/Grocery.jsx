import React, { Component } from 'react';
import Item1 from './Item1'
import HelperService from '../../service/Helper';


class Grocery extends Component {
    constructor(){ //required for a state along with super
        super()
            this.state={ //to begin a state
                userInput:'', //empty string
                list:[],
                delete: true
            }
    }
    //grabs the user input and sends into state

    changeUserInput=(input) => {
            this.setState({
                userInput: input
            }, 
            () => console.log(input)
            )
    }

//function to take the user input from state and add to the list
addToList(input){
        //need a variable to act as the list in state
        let input = this.state.list
        // listArray.push(input)
        this.setState({
            list : listArray,
            userInput : ''
        })
        HelperService().postHelper(input)
        console.log(input)
}

// To delete


    render() {
        return (
            <div>
                <input type="text" 
                value={this.state.userInput} 
                onChange={
                    (event) => { 
                        this.changeUserInput(event.target.value) }}/>

                        <button onClick={()=>this.addToList(this.state.userInput)}>
                            Add An Item To The List</button>
                            
                    {/* <ul>
                        {this.state.list.map((itemInTheList)=>{
                        return<li>{itemInTheList}</li>
                     
                        })}
                    </ul> */}
                    
                    <Item1 item={this.state.list}/>
                    
            </div>
            
        );
    }
}

export default Grocery;

//two things in state: user input and array to push our new list items into