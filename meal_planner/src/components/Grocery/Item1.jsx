import React, { Component } from 'react';

class Item1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: this.props.item,
        }

    }
    render() {
          return (
            <div>
                <ul>
                   {this.state.list.map((itemInTheList, i) =>{
                       return <li key={i}>{itemInTheList}</li>
                   }) }
                </ul>
                
            </div>
        );
    }
}

export default Item1;