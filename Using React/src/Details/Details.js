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
    }
  }

componentDidMount=()=> {
  let dish = this.props.model.getCurrentDish()
  console.log(dish);
  //modelInstance.getDish(this.props.match.params.id).then(dish =>{
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
  //})}
  /*catch((dish==null) => {
    this.setState({
      status: 'ERROR'
    })
  })*/
}

componentWillUnmount(){
  this.props.model.removeObserver(this)
}

update(){
  this.setState({
    guestsnum: this.props.model.getNumberOfGuests()
  })
}

/*handleClick(dishes){
  this.props.model.setCurrentDish(this.state.dish);
  //console.log(dish);
}*/

 /* guestsnum: this.props.model.getNumberOfGuests()*/
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
          <div className="currdishcol col-sm-10">
            <div className="row">
              <div className="col-sm-5">
                <h1>{dish.title}</h1>
                <img src={dish.image}/>
                <p>{dish.instructions}</p>
                <Link to="/selectdish">
                  <button>Back to search</button>
                </Link>
              </div>
              <div className="col-sm-5">
                <h1>Ingredients For {this.state.guestsnum} guests</h1>
                {dish.extendedIngredients.map((ingredients, i) => {
                      return (
                        <div key={i} className="row">
                          <div className="col-sm-4">
                            <p>{ingredients.amount * this.state.guestsnum} {ingredients.unit}</p>
                          </div>
                          <div className="col-sm-4">
                            <p>{ingredients.name}</p>
                          </div>
                          <div className="col-sm-4">
                            <p>SEK {ingredients.amount * this.state.guestsnum}</p>
                          </div>
                        </div>
                      );
                    }
                  )
                }
                <div className="row">
                  <div className="col-sm-6">
                      <button onClick={(dish) => this.handleClick(dish)}>Add to Menu</button>
                  </div>
                  <div className="col-sm-6">
                    <p>Total Price: {dish.pricePerServing * this.state.guestsnum}</p>
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
