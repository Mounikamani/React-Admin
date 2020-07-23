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
           step: this.props.step || 0
       }

    }
  

render(){
    return(
        <div>
         {this.getForm(this.state.step)}
        </div>
    )
}
    
getForm = (step) => {
switch (step) {
    case 1:
      return (
        <Form1
         
        />
      );
    case 2:
      return (
        <Form2 myData2={this.create2}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.formChange}
          values={values}
          formData2 = {this.state.form2}
        />
      );
    case 3:
      return (
        <Form3 value = {this.props.data}/>
      );
    case 4:
      return (
        <Form4
        />
      );
    case 5:
      return (
        <Form5 
        />
      );
    case 6:
      return (
        <Form6 
        />
      );
      case 7:
        return (
          <Form7 
        />
        );
    
         
    default:
          }
        }
  }

export default Forms;