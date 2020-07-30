import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './Menucomponent';
import Footer from './FooterComponent';
import DishDetail from './Dishdetailcomponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'; 

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promos: state.promos,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
    
  }



render(){

  const HomePage = () => {
    return(
      <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
        promo={this.props.promos.filter((promo)=> promo.featured)[0]}      
        leader={this.props.leaders.filter((leader)=> leader.featured)[0]}      
       />
    );
  }

  //Roter will give three props, match, location, history but I am only interested in match
  const DishWithId = ({match}) =>{
    return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id ===parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId ===parseInt(match.params.dishId,10))}
        />   
      );
  }

  return (
    
    <div>
      <Header />
      <Switch>
      <Route path="/home" component={HomePage}/>
      <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/> 
      <Route path="/menu/:dishId" component={DishWithId}/>
      <Route exact path="/contactus" component={Contact}/>
      <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
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

export default withRouter(connect(mapStateToProps)(Main));

