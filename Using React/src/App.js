import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel'
import Sidebar from "./Sidebar/Sidebar";
import SelectDish from "./SelectDish/SelectDish";
import Details from "./Details/Details";
import Overview from "./Overview/Overview";
import Print from "./Print/Print";

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
          <Route path="/selectdish" render={(props) => <SelectDish info={props} model={modelInstance}/>}/>
          <Route path="/sidebar" render={(props) => <Sidebar info={props} model={modelInstance}/>}/>
          <Route path="/dishdetails/:id" render={(props) => <Details info={props} model={modelInstance}/>}/>
          <Route path="/dinneroverview" render={(props) => <Overview info={props} model={modelInstance}/>}/>
          <Route path="/dinnerprintout" render={(props) => <Print info={props} model={modelInstance}/>}/>
        </header>
      </div>
    );
  }
}

export default App;
