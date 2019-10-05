import React, { Component } from 'react';
import fav from './assets/dummy.jpg';
import firebase from './firebase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Navbar from './Navbar';


class Upload extends Component {
    
    constructor(){
        super();
        this.state ={
            image: 'null',
            url: '',
            progress: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    
    handleChange =e =>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}))
        }
    }
    

handleUpload = () => {
    const {image} = this.state;
     var storage = firebase.storage();

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
     (snapshot)=>{
         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
         this.setState({ progress })

    },(error)=>{
        console.log(error)
    },
    ()=>{
        storage.ref('images').child(image.name).getDownloadURL().then( url => {
            console.log(url);
            this.setState({ url })
        })
    });
}



listAllFiles(){

    var listRef = firebase.storage().ref('images');


    listRef.listAll().then(function(res) {
        res.prefixes.forEach(function(folderRef) {
            console.log(folderRef)
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach(function(itemRef) {

          // All the items under listRef.
        });
      }).catch(function(error) {
        // Uh-oh, an error occurred!
      });
}
    
    render() {

        return (
            <div>
            <Navbar/>
            <h3> Firebase Web Storage</h3>

<Paper style={{display: 'flex', justifyContent: 'center',flexDirection: 'column', width: "300px",marginLeft: '30em',marginTop: '5em'}}>
            <input type="file" onChange={this.handleChange}/> <br/> 
            <Button onClick={this.handleUpload}> upload </Button>
            <br/>    
            <div> 
            {this.state.progress === '' ? (
                 ''
            ) : (
                 <LinearProgress color="primary" variant="determinate" value={this.state.progress} max={100}/>
            )}
            </div>
            <br/>
             <Button onClick={() => this.listAllFiles.bind(this)}> list all</Button> 
             <br/>
            <img src={this.state.url} height="100px" width="300px"/>
            </Paper>
            </div>
        );
    }
}

export default Upload;