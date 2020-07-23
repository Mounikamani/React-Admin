import React, { Component } from 'react';
import ReactDom from 'react-dom';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';
import {InputText} from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import Card from 'primereact/card';
import { Button } from 'primereact/button';
import {Link} from 'react-router-dom'
import StepBar from './StepProgressBar';
import StepProgressBar from 'react-step-progress';


class Form1 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      First_name:"",
      Middle_name:"",
      Gender:"",
      Nationality:"",
      Marital_status:"",
      Religion:"",
      Last_name:"",
      Dob:"",
      Blood_group:"",
      Mother_name:"",
      Place_of_Birth:"",
      Home_language:"",
      Grandfather_name:"",
      Country_of_birth:"",
      Other_language:"",
      National_identifier:"",
    };

let data = {
  First_name:this.state.First_name,
  Middle_name:this.state.Middle_name,
  Gender:this.state.Gender,
  Nationality:this.state.Nationality,
  Marital_status:this.state.Marital_status,
  Religion:this.state.Religion,
  Last_name:this.state.Last_name,
  Dob:this.state.Dob,
  Blood_group:this.state.Blood_group,
  Home_language:this.state.Home_language,
  Mother_name:this.state.Mother_name,
  Place_of_Birth:this.state.Place_of_Birth,
  Grandfather_name:this.state.Grandfather_name,
  Country_of_birth:this.state.Country_of_birth,
  Other_language:this.state.Other_language,
  National_identifier:this.state.National_identifier
}
// this.props.myData(data);

  }

    render(){
        return(
<div className="wrapper">
  <div className="container-fluid">
  <HeaderPage />
    {/* Page-Title */}
    <div className="row">
      <div className="col-sm-12">
        <div className="page-title-box">
          <div className="btn-group pull-right">
          </div>
        </div>
      </div>
    </div>
    {/* end page title end breadcrumb */}
    <div className="row">
      <div className="col-12">
        <div className="card m-b-30">
          <div className="card-body">
          <h3 style={{color:'red'}}>Step 1 of 7</h3> <br></br>
            <h4 style={{textAlign: 'left'}}>PERSONAL PARTICULARS</h4>
            <br />
            <div>
              <div className="row">
                <div className="col-md-4">
                  <div className="p-20">
                    <form action="#">
                   
                      <div className="form-group">
                        <label className = "float-left">First Name*</label>
                        
                  <InputText value={this.state.First_name} onChange={(e) => this.setState({First_name: e.target.value})}
                 className="form-control"  placeholder="First Name" />
                      {/* <span style={{marginLeft:'.5em'}}>{this.state.First_name}</span> */}
                        {/* <input type="text"  /> */}
                      </div>
                      <div className="form-group">
                        <label className = "float-left">Middle Name*</label>
                        
                        <InputText value={this.state.Middle_name} onChange={(e) => this.setState({Middle_name: e.target.value})}
                         placeholder="Middle Name" className="form-control"  />

                      </div>
                      <div className="form-group">
                        <label className = "float-left">Family Name / Last Name*</label>
                        
                        <InputText value={this.state.Last_name} onChange={(e) => this.setState({Last_name: e.target.value})} 
                        className="form-control"placeholder="Family Name / Last Name"  />

                      </div>
                      <div className="form-group">
                        <label className = "float-left">Mother's Name*</label>
                     
                        <InputText value={this.state.Mother_name} onChange={(e) => this.setState({Mother_name: e.target.value})} 
                       placeholder="Mother's Name" className="form-control"/>

                      </div>
                      <div className="form-group m-b-0">
                        <label className = "float-left">Grandfather's Name(UAE
                          Nationals)*</label>
                     
                        <InputText value={this.state.Grandfather_name} onChange={(e) => this.setState({Grandfather_name: e.target.value})} 
                        className="form-control"  placeholder="Grandfather's Name" />

                      </div>
                      <div className="form-group m-b-0">
                        <label className = "float-left">National Identifier
                          (only for UAE *</label>
                      
                        <InputText value={this.state.National_identifier} onChange={(e) => this.setState({National_identifier: e.target.value})} 
                        className="form-control"  placeholder="National identifier" />

                      </div>
                      
                    </form>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-20">
                    <form action="#">
                      <div className="form-group">
                        <label className = "float-left"> Gender*</label>
                        
                        <InputText value={this.state.Gender} onChange={(e) => this.setState({Gender: e.target.value})}
                         className="form-control"  placeholder="Gender" />

                      </div>
                      <div className="form-group">
                        <label className = "float-left">Marital Status*</label>
                        
                        <InputText value={this.state.Marital_status} onChange={(e) => this.setState({Marital_status: e.target.value})}
                         className="form-control"  placeholder="Marital Status" />

                      </div>
                      <div className="form-group">
                        <label className = "float-left">Date of Birth*</label>
                      
                        <InputText value={this.state.Dob} autoComplete="off" onChange={(e) => this.setState({Dob: e.target.value})}
                         className="form-control"  placeholder="mm/dd/yyyy"  />

                      </div>
                      
                      <div className="form-group">
                        <label className = "float-left">Place of Birth (Place, State)*</label>
                       
                        <InputText value={this.state.Place_of_Birth} onChange={(e) => this.setState({Place_of_Birth : e.target.value})}
                         className="form-control"   placeholder="Place of Birth"/>

                      </div>
                      <div className="form-group">
                        <label className = "float-left">Country of Birth*</label>
                        
                        <InputText value={this.state.Country_of_birth} onChange={(e) => this.setState({Country_of_birth: e.target.value})}
                         className="form-control"   placeholder="Country of Birth" />

                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-20">
                    <form action="#">
                      <div className="form-group">
                        <label className = "float-left">Nationality*</label>
                       
                        <InputText value={this.state.Nationality} onChange={(e) => this.setState({Nationality: e.target.value})}
                         className="form-control" placeholder="Nationality" />
                      </div>
                      <div className="form-group">
                        <label className = "float-left">Religion*</label>
                        
                        <InputText value={this.state.Religion} onChange={(e) => this.setState({Religion: e.target.value})}
                         className="form-control" placeholder="Religion" />
                      </div>
                      <div className="form-group">
                        <label className = "float-left">Blood Group*</label>
                       
                        <InputText value={this.state.Blood_group} onChange={(e) => this.setState({Blood_group: e.target.value})}
                         className="form-control"   placeholder="Blood Group" />
                      </div>
                      <div className="form-group ">
                        <label className = "float-left">Home Language*</label>
                        
                        <InputText value={this.state.Home_language} onChange={(e) => this.setState({Home_language: e.target.value})}
                         className="form-control"  placeholder="Home Language" />
                      </div>
                      <div className="form-group">
                        <label className = "float-left" >Other Language*</label>
                        
                        <InputText value={this.state.Other_language} onChange={(e) => this.setState({Other_language: e.target.value})}
                         className="form-control"   placeholder="Other languages" />
                      </div>
                      
                    </form>
                    <br />
                    <br />
                    <Link to="/FormPage2">
                    <Button label="Continue" className="p-button-raised"  />
                    </Link>
                  <br></br>
                    {/* <div style={{marginLeft: '100px' }}>

                  <a href="Dashboard" className="btn btn-primary">« Previous</a>
                  <a href="Form-2" className="btn btn-primary">Next »</a>
                </div> */}
                <br></br>
                  </div>
                </div> {/* end col */}
              </div> 
            
              </div> {/* end row */}
          </div>
        </div>
      </div> {/* end col */}
    </div> {/* end row */}
  </div> {/* end container */}
  <FooterPage />
</div>


        )
    }
}


export default Form1;