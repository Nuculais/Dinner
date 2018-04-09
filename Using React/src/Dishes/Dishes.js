import React, {Component} from 'react';
import './Dishes.css';
import { Link } from 'react-router-dom';
import {modelInstance} from '../data/DinnerModel';
import loader from '../Loader/loader.gif';


class Dishes extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    this.state = {
      status: 'INITIAL'
    }
  }

  // this method is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
    this.props.model.addObserver(this)
    // when data is retrieved we update the state
    // this will cause the component to re-render
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
        //thedishes = <em>Loading...</em>
        thedishes = <div id="tocenter"><img className="loader" src={loader}/></div>
    }
     else if(this.state.status == 'LOADED'){
        thedishes = this.state.dishes.map((dish) =>
          <div key={dish.id} className="dishes col-sm-2">
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
