import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import FirebaseSignin from './FirebaseSignin'
import Profile from './Profile';
import Upload from './Upload';

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
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

