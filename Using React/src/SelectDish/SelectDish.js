import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import loader from '../Loader/loader.gif';

class SelectDish extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Dinner Planner',
            status: 'INITIAL',
            filter: this.props.model.dishFilter
        }
    }
    componentDidMount = () => {
        this.props.model.addObserver(this)
        this.setState({
            status: 'LOADED',
        })
    }

    update(){
        this.setState({
            guestsNum: this.props.model.getNumberOfGuests(),
            dishes: this.props.model.getMenu(),
            dishFilter: this.props.model.getDishFilter(),
            dishType: this.props.model.getDishType()
        })
    }

    componentWillUnmount() {
        this.props.model.removeObserver(this)
    }

    dishChanged = (e) => {
        this.props.model.setDishFilter(e.target.value)
    }

    typeChanged = (f) => {
        this.props.model.setDishType(f.target.value)
    }

    handleClick = (g) => {
        this.props.model.getAllDishes()
        this.update()
    } 

    render() {
        if (this.state.status === 'INITIAL') {
            return <div id="tocenter"><img className="loader" src={loader} alt="Not available"/></div>
        }
        else if (this.state.status === 'LOADED') {
            return (
                <div className="SelectDish row">
                    <Sidebar model={this.props.model}/>
                    <div className="select col-md-8">
                        <h3>Browse dishes</h3>
                        <div className="row">
                            <input className="field col-sm-2" onChange={this.dishChanged} placeholder="Search here"/>
                            <select id="field2" className="col-sm-2" onChange={this.typeChanged}>
                                <option value="">All</option>
                                <option value="appetizer">Appetizer</option>
                                <option value="main course">Main Course</option>
                                <option value="side dish">Side Dish</option>
                                <option value="dessert">Dessert</option>
                                <option value="salad">Salad</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="soup">Soup</option>
                                <option value="beverage">Beverage</option>
                                <option value="sauce">Sauce</option>
                                <option value="drink">Drink</option>
                            </select>
                            <button id="moredishes" className="btn btn-warning" onClick={this.handleClick}>More dishes</button>
                        </div>
                        <Dishes model={this.props.model} />
                    </div>
                </div>
            );          
        }
        else
        {
           return ( <b>Unable to fulfill request, please reload.</b>);
        }
    }
}

export default SelectDish;
