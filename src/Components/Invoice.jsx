import React, { Component } from 'react';
import fav from '../assets/dummy.jpg';
import firebase, { auth, provider } from '../firebase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Navbar from '../Navbar';
// import * as firebase from 'firebase/app';
// import { tsExpressionWithTypeArguments } from '@babel/types';
// import { emitKeypressEvents } from 'readline';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';

class Invoice extends Component {

    constructor() {
        super();
        this.state = {
            file: 'null',
            url: '',
            progress: '',
            startDate: '',
            endDate: '',
            downloadUrl: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }


    componentDidMount() {
     
    }

    handleChange = e => {
        const { file, name,startDate,endDate } = this.state;
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const fileName = `${name}-${startDate}-${endDate}`;
            const myNewFile = new File([file], fileName, { type: "pdf" });
            console.log(myNewFile)
            this.setState(() => ({ file,fileName }))


        var storage = firebase.storage();
        const ref = `invoices/${name}/${fileName}`;
        this.setState({ref});
        const uploadTask = storage.ref(ref).put(myNewFile);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({ progress })

            }, (error) => {
                console.log(error)
            },
            () => {
                storage.ref(ref).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({downloadUrl: url })
                })
            });
        }



    }


submitForm(e){
    // alert(e);
    e.preventDefault();
    const {name,ref,startDate,endDate,downloadUrl,fileName}=this.state;
    const doc = {
        startDate,
        endDate,
        name,
        downloadUrl
    }
    firebase.firestore().collection(`invoices`).doc(name).get().then((ele)=>{
        console.log("get",ele.data());
        let obj = {
            invoices : []
        }
        if(ele.data()==undefined){
            const key = startDate.concat('_').concat(endDate); 
            let obj1 = {}
            obj1[startDate.concat('_').concat(endDate)]=doc;
            obj.invoices.push(obj1)
        }
        else{
           obj.invoices = [...ele.data().invoices].push({key: doc })
        }
        firebase.firestore().collection(`invoices`).doc(name).set(obj).then((doc)=>{console.log("Sucessfull",doc)}).catch(e=>{
            console.log(e)
        })
    })
    .catch(e=>{
        console.log(e)
    })

    
}

    handleUpload = () => {

    }

    handleDateChange = (e) =>{
        alert(e)
    }

    getTenantName = e => {
        this.setState({ name: e.target.value })
    }


 getStartDate(e){
console.log(e.target.value)
this.setState({startDate:e.target.value})
 }


 getEndDate(e){
    console.log(e.target.value)
    this.setState({endDate:e.target.value})

 }


    render() {

        return (
            <div>


                <div class="row">
                    <form onSubmit={this.submitForm.bind(this)} style={{ textAlign: "center" }} class="col s6">

                        <div class="row">
                            <div class="input-field col s12">

                                <input id="tenantId" type="text" class="validate" onChange={this.getTenantName} />
                                <label for="tenantId">Tenant Id</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="startDate" onChange={this.getStartDate.bind(this)} type="date" class="datepicker" />
                                <label for="startDate"> Start Date</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="endDate" onChange={this.getEndDate.bind(this)} type="date" class="datepicker" />
                                <label for="endDate"> End Date</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="file" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div>
                            {this.state.progress === '' ? (
                                ''
                            ) : (
                                    <LinearProgress color="primary" variant="determinate" value={this.state.progress} max={100} />
                                )}
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="fileDownloadUrl" type="text" class="validate" value={this.state.downloadUrl} />
                                <label for="fileDownloadUrl">fileDownloadUrl</label>
                            </div>
                        </div>
                
                        {this.state.downloadUrl === '' ? (
                                ''
                            ) : (
                                <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                                    )}
                   
             

                    </form>
                </div>
            </div>
        );
    }
}

export default Invoice;