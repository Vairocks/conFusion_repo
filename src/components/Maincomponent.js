import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './Menucomponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './Dishdetailcomponent';
import Footer from './FooterComponent';



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
      <Header />
      <Menu dishes= {this.state.dishes} onClick={(dishId)=>{this.onDishSelect(dishId)}}/> 
      <DishDetail selected_dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>    
      <Footer/>
    </div>
  );
  //Above the info in dishes state is passed via creating a property dishes to the MenuComponent class(i.e Menu) 
}; 
}

export default Main;

