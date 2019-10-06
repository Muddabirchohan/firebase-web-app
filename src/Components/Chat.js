// import React, { Component } from 'react';
// import firebase from './firebase';


// class Chat extends Component {

//    login() {
//     // Log the user in via Twitter
//     var provider = new firebase.auth.TwitterAuthProvider();
//     firebase.auth().signInWithPopup(provider).catch(function(error) {
//       console.log("Error authenticating user:", error);
//     });

//     firebase.auth().onAuthStateChanged(function(user) {
//         // Once authenticated, instantiate Firechat with the logged in user
//         if (user) {
//           initChat(user);
//         }
//       });
    

//   }

//   initChat(user) {
//     // Get a Firebase Database ref
//     var chatRef = firebase.database().ref("chat");

//     // Create a Firechat instance
//     var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

//     // Set the Firechat user
//     chat.setUser(user.uid, user.displayName);
//   }
    
    
    
//     render() {
//         return (
//             <div>
//             <div id="firechat-wrapper"></div>
//             </div>
//         );




        
//     }
// }

// export default Chat;