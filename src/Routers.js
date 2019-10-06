import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import FirebaseSignin from './Components/FirebaseSignin'
import Profile from './Profile';
import Upload from './Components/Upload';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Signin from './Components/Signin';

export default class RoutersComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact={true} path="/" component={App}/>   
        <Route  path="/firebase" component={FirebaseSignin}/>    
        <Route  path="/profile" component={Profile}/>    
        <Route  path="/upload" component={Upload}/>    
        <Route  path="/chat" component={Chat}/>    
        <Route  path="/login" component={Login}/>    
        <Route  path="/signin" component={Signin}/>    

        
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


