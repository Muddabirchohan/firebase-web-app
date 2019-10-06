import React,{Component} from 'react';
import '../App.css';
import firebase from 'firebase';
import Navbar from '../Navbar';


export default class FirebaseSignin extends Component {
  

constructor(){
  super();
  this.state={
    confirmationResult: null,
    ready: false,
    phoneNumber: '',
    countryCode: ''
  }

}


  sendMessage(){
      this.setState({ ready: true })
  }

getNumber(e){
    console.log(e.target.value)
    this.setState({phoneNumber: e.target.value})
}

submitForm=(e)=>{
    const {phoneNumber} = this.state;
// console.log(countryCode)
e.preventDefault();
var firebaseConfig = {
    apiKey: "AIzaSyBUHBpaMux8yRIKJRR8TAog8daI30mbPhY",
    authDomain: "ecommerce-19f2f.firebaseapp.com",
    databaseURL: "https://ecommerce-19f2f.firebaseio.com",
    projectId: "ecommerce-19f2f",
    storageBucket: "ecommerce-19f2f.appspot.com",
    messagingSenderId: "897488097425",
    appId: "1:897488097425:web:043da4a345c30b66742f30"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

 firebase.initializeApp(firebaseConfig);

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': function(response) {
            console.log("success", response);
        },
        'expired-callback': function() {
            console.log("expired-callback");
        }
    });

    window.recaptchaVerifier.render().then(function(widgetId) {
        window.recaptchaWidgetId = widgetId;

var appVerifier = window.recaptchaVerifier;
const cellNumber = '+92'+phoneNumber;
console.log(cellNumber);
firebase.auth().signInWithPhoneNumber(cellNumber, appVerifier)
  .then(function (confirmationResult) {

    console.log(confirmationResult);
    let code = window.prompt('Please enter the 6 digit code');
    return confirmationResult.confirm(code);
  }).catch(function (error) {
   alert("failed to verify ")
  });
    });
}



getCountryCode(e){
  console.log(e.currentTarget.value);
  this.setState({ countrycode: e.currentTarget.value})
}

  render(){    
    console.log(this.state.countrycode)
    return(
      <div>
      <Navbar/>

      <div class="row">
      <div class="col">
        <div class="card">
        
          <div id="recaptcha-container"></div> 
          
            <p>Sign in with Phone Number</p>
            <form onSubmit={(e) => this.submitForm(e)}> 
            <br />
            
            <div>
            <label for="enter no">Enter Number </label>
            <input placeholder="enter number" value={this.state.phoneNumber} type="text" class="validate" onChange={(e)=> this.getNumber(e)}/>
          </div>

         
  
          <div class="card-action">

          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
        </button>
          </div>
          </form>
        </div>
      </div>
    </div>

      </div>
    )
  }
}
