import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {
        return (
        <div>
                        <header className="header">
                <h1>Welcome Shopper! Let's decide what to make for dinner!</h1>
                <Link to="/">
                <button className="btn">Home</button>
                </Link>    
                <Link to="/Recipes">
                <button className="btn">Recipe Search</button>
                </Link>
                <Link to="/Grocery">
                <button className="btn">Grocery List</button>
                </Link>
                <Link to="/Rev">
                <button className="btn">Our Reviews</button>
                </Link>
                </header>
        </div>
    );
};

export default Header;