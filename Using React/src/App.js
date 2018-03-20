import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel'
import SelectDish from "./SelectDish/SelectDish";
import Dishes from "./Dishes/Dishes";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>

          {/* We render different components based on the path */}
          <Route exact path="/" component={Welcome}/>
          <Route path="/search" render={() => <SelectDish model={modelInstance}/>}/>
        //  <Route path="/search" render={() => <SelectDish model={modelInstance}/>}/>
        </header>
      </div>
    );
  }
}

export default App;
