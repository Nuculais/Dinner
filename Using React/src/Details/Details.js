import React, { Component } from 'react';
import './Details.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import {Link} from 'react-router-dom';
import loader from '../Loader/loader.gif';
import {modelInstance} from '../data/DinnerModel';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'INITIAL',
      guestsnum: this.props.model.getNumberOfGuests()
    }
  }

componentDidMount=()=> {
  this.props.model.addObserver(this)
 // dish = this.props.model.getCurrentDish()
  //console.log(dish);
  this.props.model.getDish(this.props.info.match.params.id).then(dishes =>{
  
      this.setState({
        status: 'LOADED',
        dish: dishes
      })
 }).catch(() => {
    this.setState({
      status: 'ERROR'
    })
  })
}

componentWillUnmount(){
  this.props.model.removeObserver(this)
}

update(){
  this.setState({
    guestsnum: this.props.model.getNumberOfGuests(),
    thedish: this.props.model.getCurrentDish()
  })
}

handleClick(dishes){
  this.props.model.setCurrentDish(this.state.dish);
  //this.props.model.addDish(this.state.dish);
  this.props.model.addDish();
}

  render() {
    let dish = this.state.dish;
    let dishpart = null;

    if(this.state.status === 'INITIAL'){
      return(
     <div className="currdishrow row" id="loaderdiv">
       <Sidebar model={this.props.model}/>
       <img className="loader" src={loader}/>
     </div> //ev class
      );
    }
    else if(this.state.status === 'LOADED'){
      return(
        <div className="currdishrow row">
        <Sidebar model={this.props.model}/>
          <div className="currdishcol col-md-8">
            <div className="row">
              <div className="col-sm-5">
                <h3>{dish.title}</h3>
                <img id="bilden" src={dish.image}/>
                <p>{dish.instructions}</p>
                <Link to="/selectdish">
                  <button className="btn btn-warning">Back to search</button>
                </Link>
              </div>
              <div className="col-sm-5">
                <h3>Ingredients</h3>
                {dish.extendedIngredients.map((ingredients, i) => {
                      return (
                        <div key={i} className="row">
                          <div className="col-sm-9">
                            <p>{ingredients.originalString}</p>                         
                        </div></div>
                      );
                    }
                  )
                }
                <div className="row">
                  <div className="col-sm-6">
                      <button className="btn btn-warning" onClick={(dish) => this.handleClick(dish)}>Add to Menu</button>
                  </div>
                  <div className="col-sm-6">
                    <p>Total Price: {Math.floor(dish.pricePerServing * this.state.guestsnum)}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
    else{
    return (
      <div className="currdishrow row">
      <Sidebar model={this.props.model}/>
      <div className="currdishcol col-sm-10">
        <b>Unable to fulfill request, please reload.</b>
      </div>
    </div>
    );
  }
  }
}

export default Details;
