import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import profile from './assets/dummy.jpg'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default class Profile extends Component {
render(){
    return (
        <div>
        <Navbar/> 
        <div > 
        <div class="row">
    
          <div class="col s12 m4 l2 side-menu"> Note that "m4 l3" was added 
            Grey navigation panel
    
                  This content will be:
              3-columns-wide on large screens,
              4-columns-wide on medium screens,
              12-columns-wide on small screens 
    
              <ul className="lists">
              <li>    <i class="material-icons">add</i>
              Add
               </li>

              <li>
              <i class="material-icons">insert_chart</i>
                rotate
              </li>
              <li>
              <i class="material-icons">ac_unit</i>
                rotate
              </li>
              <li>
              <i class="material-icons">accessibility</i>
                rotate
              </li>
              <li>
              <i class="material-icons">account_box</i>
                rotate
              </li>
              
              </ul> 
          </div>
    
          <div class="col s12 m8 l10">

        <div> 
        <div class="card" className="bg">
     
    
        <div class="row">
        
        <div class="col l4">
        <div class="card  darken-1">
        <div class="card-content white-text">
          <img src={profile}  height="200px"/>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
      </div>
        </div>
        
        

        <div class="col l8"> 
        <div class="card">
        <div class="card-content white-text">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
      </div>
      </div>


      <div class="card">
      <div class="card-action">
      <ul> 

      <li>
      <i class=" material-icons"> backup</i>
      <a class="waves-effect waves-light btn-small">Button</a>

      </li> 
      <li>
      <i class=" material-icons"> beenhere</i>
      <a class="waves-effect waves-light btn-small">Button</a>

      </li> 
      <li>
      <i class=" material-icons"> blur_circular</i>
      <a class="waves-effect waves-light btn-small">Button</a>

      </li> 
      </ul>

      </div>
    </div>


        </div>


        </div>

      </div> 
        </div> 

    
          </div>
    
        </div>
    </div>
    </div>
    
      );
}
 
}