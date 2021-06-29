import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Main from "./components/Main";
import Grocery from "./components/Grocery/Grocery";
import Recipes from "./components/Recipes/Recipes";
import Reviews from "./components/Rev/Reviews";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={Main} />
         <Route exact path="/recipes" component={Recipes} />
         <Route exact path="/grocery" component={Grocery} />
        <Route exact path="/rev" component={Reviews} />
       
        </Switch>


      </Router>

    </div>
  );
}

export default App;
