import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {NavbarBrand} from 'react-bootstrap';
import Menu from './Menucomponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './Dishdetailcomponent';
import Comm from './Commentcomponent';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state ={
      dishes : DISHES, //see here dishes is a state
      selectedDish: null
    };
  }
 
  onDishSelect(dishId){
    this.setState({ selectedDish: dishId})
}
 
render(){
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes= {this.state.dishes} onClick={(dishId)=>{this.onDishSelect(dishId)}}/> 
      <div className="container">
        <div className="row">
            <DishDetail selected_dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            <Comm current_dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        </div>
      </div>
    </div>
  );
  //Above the info in dishes state is passed via creating a property dishes to the MenuComponent class(i.e Menu) 
}; 
}

export default Main;
