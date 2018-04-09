import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Overview.css';
import loader from '../Loader/loader.gif';
import {modelInstance} from '../data/DinnerModel';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'INITIAL',
      guestsnum: this.props.model.getNumberOfGuests()
    }
  }

  componentDidMount() {
    this.props.model.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }


  update() {
    this.setState({
      guestsnum: this.props.model.getNumberOfGuests()
    })
  }

  render(){
    switch (this.state.status) {
      case 'INITIAL':
      return (
        <div className="col">
          <div className="row">
            <h1 className="col" id="header">My dinner: {this.state.guestsnum} guests</h1>
            <div className="col">
              <Link to="/selectdish">
                <button className="btn btn-warning">Back to search</button>
              </Link>
            </div>
          </div>
            <div className="row">
            {this.props.model.getMenu().map((dish, i) => {
                return (                   
                        <div className="col" key={i}>
                          <img className="overviewimg" src={dish.image}/>
                          <h4>{dish.title}</h4>
                          <p>{Math.floor(dish.pricePerServing * this.state.guestsnum)} kr</p>
                        </div>
                  )
              })
            }
            </div>
          <div className="row">
            <div className="col">
              <h2>Total menu price: {this.props.model.getTotalMenuPrice()*this.state.guestsnum} kr.</h2>
            </div>
            <div className="col">
              <Link to="/dinnerprintout">
                <button className="btn btn-warning">Print Menu</button>
              </Link>
            </div>
          </div>
        </div>

      );
  }
}
}

export default Overview;