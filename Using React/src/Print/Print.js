import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Print.css';
import loader from '../Loader/loader.gif';
import {modelInstance} from '../data/DinnerModel';

class Print extends Component {
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
    if(this.state.status == 'INITIAL') {
      return (
        <div className="col">
          <div className="row" id="header">
            <h1 className="col">My dinner: {this.state.guestsnum} guests</h1>
            <div className="col">
              <Link to="/selectdish">
                <button className="btn btn-warning">Back to search</button>
              </Link>
            </div>
          </div>
            <div className="row">
            {this.props.model.getMenu().map((dish, i) => {
                return (                   
                        <div className="row">
                        <div className="col-sm-6" key={i}>
                        <h4>{dish.title}</h4>
                          <img className="overviewimg" src={dish.image}/>                        
                        </div>
                        <div className="col-sm-6" key={i}>
                          <p>{dish.instructions}</p>
                        </div>
                        </div>
                  )
              })
            }
            </div></div>
      );
  }
}
}

export default Print;