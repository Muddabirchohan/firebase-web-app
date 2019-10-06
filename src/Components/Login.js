import React, { Component } from 'react';
import firebase from '../firebase';



class Signin extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }


    getEmail= e => {
        this.setState({email: e.target.value});
    }


    getPassword= e => {
        this.setState({password: e.target.value});
    }

    handleSubmit = e => {
        console.log(e);
        e.preventDefault();
        const {email, password} = this.state;
    




        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
            // ...
          });

        // firebase
        //     .auth()
        //     .signInWithEmailAndPassword(email, password)
        //     .then(user => {
        //         this.props.history.push('/');
        //         console.log("user",user)
        //     })
        //     .catch(error => {
        //         this.setState({error});
        //     });

    }


    login=(e)=>{
        e.preventDefault();
        const {email,password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
            // ...
          });


          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log(user)
            } else {
              // No user is signed in.
            }
          });
    }

    render() {

        const {email,password} = this.state;

        return (
            <div>
        <form onSubmit={(e) => this.login(e)}> 
        <input type="text" value={email} onChange={(e) => this.getEmail(e)}/>
        <input type="text" value={password} onChange={(e) => this.getPassword(e)}/>
        <input type="submit" value="login"/>
        </form>           
            </div>
        );
    }
}

export default Signin;