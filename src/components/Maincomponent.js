import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './Menucomponent';
import Footer from './FooterComponent';
import DishDetail from './Dishdetailcomponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOS} from '../shared/promos';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {

  constructor(props) {
    super(props);

    this.state ={
      dishes : DISHES,
      comments : COMMENTS,
      promos: PROMOS,
      leaders: LEADERS 
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
      <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
        promo={this.state.promos.filter((promo)=> promo.featured)[0]}      
        leader={this.state.leaders.filter((leader)=> leader.featured)[0]}      
       />
    );
  }
  return (
    
    <div>
      <Header />
      <Switch>
      <Route path="/home" component={HomePage}/>
      <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/> 
      <Route exact path="/contactus" component={Contact}/>
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

