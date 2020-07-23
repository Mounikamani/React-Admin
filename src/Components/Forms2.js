import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';
import Stepbar from './StepProgressBar';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import Card from 'primereact/card';
import { Button } from 'primereact/button';

class Forms extends Component{
    constructor(props){
        super(props);
       this.state = {
           step: 0
       }

    }
  
    setStepBar = (step) => {
        console.log
        this.setState({
            step:step
        })
    }

render(){
    return(
        <div>
            <Stepbar clicked = {this.setStepBar()} />
            <Forms />
        </div>
    )
}
}

export default Forms;