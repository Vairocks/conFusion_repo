import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './Menucomponent';
import Footer from './FooterComponent';
import DishDetail from './Dishdetailcomponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
import Login from './LoginComponent';
import {RegisterPage} from './RegisterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'; 
import {postFeedback ,postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders,login,logout,deleteComment} from '../redux/ActionCreator'
import {actions} from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promos: state.promos,
    leaders: state.leaders,
    login_status: state.authentication
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (firstname,lastname,telnum,email,agree,contactType,message) => dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message)),  
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () =>  {dispatch(fetchPromos())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  login: (username,password) => dispatch(login(username,password)),
  logout: () => dispatch(logout()),
  deleteComment: (dishId,commentId) => dispatch(deleteComment(dishId,commentId))  
});



class Main extends Component {


  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    alert(JSON.stringify(this.props.login_status));
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
        leader={this.props.leaders.leaders.filter((leader)=> leader.abbr=='CEC')[0]}
        leadersLoading={this.props.leaders.isLoading}
        leadersErrMess={this.props.leaders.errMess}      
       />
    );
  }

  const ContactComp = () => {
    return(
      <Contact resetFeedbackForm={this.props.resetFeedbackForm}
       postFeedback={this.props.postFeedback}
      />
    );
  }

  //Router will give three props, match, location, history but I am only interested in match
  const DishWithId = ({match}) =>{
    return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id ===match.params.dishId)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess} 
        postComment={this.props.postComment}
        deleteComment={this.props.deleteComment}
        login_status={this.props.login_status}
        />   
      );
  }

  return (
    
    <div>
      <Header login_status={this.props.login_status} logout={this.props.logout} />
      <TransitionGroup>
      <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
      <Switch>
      <Route path="/home" component={HomePage}/>
      <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/> 
      <Route path="/menu/:dishId" component={DishWithId}/>
      <Route exact path="/contactus" component={ContactComp }/>
      <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
      <Route path="/login" component={() => <Login login={this.props.login} login_status={this.props.login_status} />} />
      <Route path="/register" component={() => <RegisterPage/>}/>
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

    /*  comments={this.props.comments.comments.filter((comment) => comment.dish._id ===parseInt(match.params.dishId,10))}
    commentsErrMess={this.props.comments.errMess}  */