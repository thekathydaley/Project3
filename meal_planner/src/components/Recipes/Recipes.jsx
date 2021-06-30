import React, { Component } from 'react';
import RecipeData from './RecipeData';


class Recipes extends Component {
    state={
        recipeSearch: '',

        isLoaded: false,
        recipeData: {},
    }
    handleChangeRecipe= (event) => {
        let recipeLog = this.state.recipeSearch
        let recipeInput = event.target.name
        let userInput = event.target.value
        recipeLog = userInput
        this.setState({recipeSearch: recipeLog})
    }

    handleSubmit=(event) => {
        event.preventDefault()
        fetch(`https://api.edamam.com/search?q=${this.state.recipeSearch}&app_id=b96170d4&app_key=6102605487cc11d2fcf3b86f3ce1d70f&calories=0-800&health=alcohol-free`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                    recipeData: result.hits[0].recipe
                });
                console.log(this.state.recipeData)
            },
        )
        // this.setState({
        //                 isLoaded:true,
        //                 recipeData: dummyData.json()
        // }) 
    }
    
    render() {
        console.log(this.state.recipeData)
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="recipeForm">
                <br></br>
                    <input
                    placeholder="Enter Recipe Search Here"
                    type="text"
                    name="recipe"
                    value={this.state.recipeSearch}
                    onChange={this.handleChangeRecipe}
                    />
                    <button type="submit" className="btn">Search</button>
                </form>
                <RecipeData
                title={this.state.recipeData.label}
                url={this.state.recipeData.url}
                image={this.state.recipeData.image}
                    />
                
            </div>
        );
    }
}

export default Recipes;