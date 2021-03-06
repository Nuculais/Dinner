import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      guestsnum: this.props.model.getNumberOfGuests()
    }
  }

  componentDidMount() {
    this.props.model.addObserver(this)
  }

  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  update() {
    this.setState({
      guestsnum: this.props.model.getNumberOfGuests(),
      totcost: this.props.model.getTotalMenuPrice()
    })
  }

  onGuestsnumChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
  }

  handleClick(dish){
    this.props.model.removeDishFromMenu(dish);
  }

  render() {
    return (
      <div className="Sidebar col-md-3">
   
        <h3>My Dinner</h3>
        <br/>
        <p>Guests: 
        <input id="theguests" value={this.state.guestsnum} onChange={this.onGuestsnumChanged}/>
        <br/>
        Total guests: {this.state.guestsnum}.
        </p>
        <div className="row">
          <div className="col">
            {this.props.model.getMenu().map((dish, j) => {
                return (
                        <div className="row">
                          <div className="col-sm-7">
                            <div key={j}>
                              <p>{dish.title}</p>
                            </div>
                            </div>
                          <div className="col-sm-2">
                            <button className="btn" onClick={() => this.handleClick(dish)}>X</button>
                          </div>
                          </div>
                      )
              })}
              </div>
              </div>

        <p>Total cost: {this.state.totcost} kr.</p>
        <Link to="/dinneroverview">
        <button className="btn btn-warning" id="dinconfirm">Confirm Dinner</button>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
