import React, { Component } from 'react';
import './Details.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import {Link} from 'react-router-dom';
import {modelInstance} from '../data/DinnerModel';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'INITIAL',
    }
  }

componentDidMount=()=> {
  modelInstance.getDish(this.props.match.params.id).then(dish =>{
    console.log(dish);
    if(dish)
    {
      this.setState({
        status: 'LOADED',
        dish: dish
      });
    }
    else{
      this.setState({
        status: 'ERROR'
      });
    }
  }).catch(() => {
    this.setState({
      status: 'ERROR'
    })
  })
}


 /* guestsnum: this.props.model.getNumberOfGuests()*/
  render() {
    let dish = null;
    let dishpart = null;

    if(this.state.status === 'INITIAL'){
     dishpart = <img className="loader" src={loader}/>; //ev class
    }
    else if(this.state.status === 'LOADED'){
      dish = this.state.dish;
    }

    return (
      <div className="Details">
        



        <Dishes/>
      </div>
    );
  }
}

export default Details;
