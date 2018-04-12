import React, {Component} from 'react';
import './Dishes.css';
import { Link } from 'react-router-dom';
import {modelInstance} from '../data/DinnerModel';
import loader from '../Loader/loader.gif';


class Dishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'INITIAL'
    }
  }


  componentDidMount = () => {
    this.props.model.addObserver(this)
    modelInstance.getAllDishes().then(dishes => {
      this.setState({
        status: 'LOADED',
        dishes: dishes.results
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }

  componentWillUnmount() {
    this.props.model.removeObserver(this)
  } 

  update(){
    modelInstance.getAllDishes().then(dishes =>{
      this.setState({
        status: 'LOADED',
        dishes: dishes.results
      })
    }).catch(() =>{
      this.setState({
        status: 'ERROR'
      })
    })
  }

  render() {
    let thedishes = null;

    if(this.state.status == 'INITIAL') {
        thedishes = <div id="tocenter"><img className="loader" src={loader}/></div>
    }
     else if(this.state.status == 'LOADED'){
        thedishes = this.state.dishes.map((dish) =>
          <div key={dish.id} className="dishes col-sm-3">
          <Link to={"/dishdetails/" + dish.id}>
              <img className="dishimg" src={"https://spoonacular.com/recipeImages/" + dish.image} />
              <p className="dishname"> {dish.title} </p>
          </Link>
          </div>
        )}
 
      else{
        thedishes = <b>Could not load dishes, please try again.</b>
    }

    return (
      <div className="Dishes row">
        <div className="row">
          {thedishes}
        </div>
      </div>
    );
  }
}

export default Dishes;
