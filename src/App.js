import React, { Component } from 'react';
import Main from './components/Maincomponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {

  render(){
  return (
    <BrowserRouter>
    <div>
      <Main />  
    </div>
    </BrowserRouter>
  );
  //Above the info in dishes state is passed via creating a property dishes to the MenuComponent class(i.e Menu) 
}; 
}

export default App;
