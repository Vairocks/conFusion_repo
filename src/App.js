import React, { Component } from 'react';
import Main from './components/Maincomponent';
import './App.css';
class App extends Component {


  render(){
  return (
    <div>
      <Main />  
    </div>
  );
  //Above the info in dishes state is passed via creating a property dishes to the MenuComponent class(i.e Menu) 
}; 
}

export default App;
