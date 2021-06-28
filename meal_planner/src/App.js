import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Main from "./components/Main";
import Calories from "./components/Grocery/Grocery";
import Exercise from "./components/Recipes/Recipes";
import Recipes from "./components/Rev/Rev";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path="/calories" component={Calories} />
        <Route exact path="/exercise" component={Exercise} />
        <Route exact path="/recipes" component={Recipes} />
        </Switch>


      </Router>

    </div>
  );
}

export default App;
