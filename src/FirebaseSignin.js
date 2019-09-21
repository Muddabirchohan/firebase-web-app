import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

export default class FirebaseSignin extends Component {
  

constructor(){
  super();
  this.state={
    confirmationResult: null,
    ready: false,
    phoneNumber: null
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
//           var phoneNumber = getPhoneNumberFromUserInput();
//           var recaptchaResponse = grecaptcha.getResponse(window.recaptchaWidgetId);
var appVerifier = window.recaptchaVerifier;
// var phoneNumber = getPhoneNumberFromUserInput();
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  .then(function (confirmationResult) {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    let code = window.prompt('Please enter the 6 digit code');
    return confirmationResult.confirm(code);
  }).catch(function (error) {
    // Error; SMS not sent
    // ...
  });
    });

}


  render(){    
    
    return(
        <ion-content className="firebase-web-app">
         <div id="recaptcha-container"></div> 

        <ion-item>
          <ion-label stacked>Phone Number</ion-label>
          <form onSubmit={(e) => this.submitForm(e)}> 
          <input type="text" onChange={(e)=> this.getNumber(e)}/>
          <button type="submit"> send </button>
          </form>
        </ion-item>
      </ion-content>
    )
  }
}
