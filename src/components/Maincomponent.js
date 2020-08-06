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
import {postComment, fetchDishes, fetchComments, fetchPromos} from '../redux/ActionCreator'
import {actions} from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group'

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promos: state.promos,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () =>  {dispatch(fetchPromos())}
});



class Main extends Component {


  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

render(){

  const HomePage = () => {
    return(
      <Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promo={this.props.promos.promos.filter((promo)=> promo.featured)[0]}
        promosLoading={this.props.promos.isLoading}
        promosErrMess={this.props.promos.errMess}      
        leader={this.props.leaders.filter((leader)=> leader.featured)[0]}      
       />
    );
  }

  //Roter will give three props, match, location, history but I am only interested in match
  const DishWithId = ({match}) =>{
    return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id ===parseInt(match.params.dishId,10))[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dishId ===parseInt(match.params.dishId,10))}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        />   
      );
  }

  return (
    
    <div>
      <Header />
      <TransitionGroup>
      <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
      <Switch>
      <Route path="/home" component={HomePage}/>
      <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/> 
      <Route path="/menu/:dishId" component={DishWithId}/>
      <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
       <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
      <Redirect to="/home" />  
      </Switch>
      </CSSTransition>
      </TransitionGroup>
      <Footer/>
    </div>
    
  );
  
          /*<Menu dishes= {this.state.dishes} onClick={(dishId)=>{this.onDishSelect(dishId)}}/> 
      <DishDetail selected_dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>*/
  /*passing props to the component in Route*/
  //Above the info in dishes state is passed via creating a property dishes to the MenuComponent class(i.e Menu) 
}; 
}
// 
     
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

