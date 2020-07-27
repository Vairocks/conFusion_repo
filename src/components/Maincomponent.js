import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './Menucomponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './Dishdetailcomponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {

  constructor(props) {
    super(props);

    this.state ={
      dishes : DISHES, //see here dishes is a state
     // selectedDish: null
    };
  }
 /*
  onDishSelect(dishId){
    this.setState({ selectedDish: dishId})
}*/



render(){

  const HomePage = () => {
    return(
      <Home />
    );
  }
  return (
    
    <div>
      <Header />
      <Switch>
      <Route path="/home" component={HomePage}/>
      <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/> 
      <Redirect to="/home" />  
      </Switch>
      <Footer/>
    </div>
    
  );
  
          /*<Menu dishes= {this.state.dishes} onClick={(dishId)=>{this.onDishSelect(dishId)}}/> 
      <DishDetail selected_dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>*/
  /*passing props to the component in Route*/
  //Above the info in dishes state is passed via creating a property dishes to the MenuComponent class(i.e Menu) 
}; 
}

export default Main;

