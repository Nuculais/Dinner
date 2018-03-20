import React, { Component } from 'react';
import './Details.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import {modelInstance} from '../data/DinnerModel';

class Details extends Component {
  render() {
    return (
      <div className="Details">
        <h2>This is the Dish Details screen</h2>



        <Dishes/>
      </div>
    );
  }
}

export default Details;
