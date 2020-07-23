import React, { Component } from 'react';
import ReactDom from 'react-dom';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import Card from 'primereact/card';
import { Button } from 'primereact/button';
import {Link} from 'react-router-dom'

class Form7 extends Component{
constructor(){
  super();
  this.state={
    Current_basic:"",
    Current_Transportation: "",
    Current_Total_package: "",
    Current_Housing: "",
    Current_Other_allowances:"",
    Current_Expected_Date_of_Joining:"",
    Expected_basic: "",
    Expected_Transportation:"",
    Expected_Total_package:"",
    Expected_Housing: "",
    Expected_Other_allowances:"",
    Expected_Expected_Date_of_Joining:"",
  
  }
 
}
myFunc(){
  if(!alert("Submitted Successfully")) document.location = '/Dashboard';
}


    render(){
        return(
<div className="wrapper">
    <HeaderPage />
    
  <div className="container-fluid">
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
          <h3 style={{color:'red'}}>Step 7 of 7</h3> <br></br>
            <h3>Renumeration</h3>
            <h5>CURRENT SALARY PACKAGE</h5> <br />
            <div className="row">
              <div className="col-md-4">
                <div className="p-20">
                  <form action="#">
                    <div className="form-group">
                      <label className = "float-left">Basic*</label>
                   
                      <InputText value={this.state.Current_basic} onChange={(e) => this.setState({ Current_basic: e.target.value })}
                              className="form-control"  placeholder="Basic" />
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Housing*</label>
                    
                      <InputText value={this.state.Current_Housing} onChange={(e) => this.setState({ Current_Housing: e.target.value })}
                              className="form-control" placeholder="Housing" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-20">
                  <form action="#">
                    <div className="form-group">
                      <label className = "float-left"> Transportation*</label>
                  
                      <InputText value={this.state.Current_Transportation} onChange={(e) => this.setState({ Current_Transportation: e.target.value })}
                              className="form-control" placeholder="Transportation" />
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Other Allowances*</label>
                     
                      <InputText value={this.state.Current_Other_allowances} onChange={(e) => this.setState({ Current_Other_allowances: e.target.value })}
                              className="form-control" placeholder="Other Allowances" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-20">
                  <form action="#">
                    <div className="form-group m-b-0">
                      <label className = "float-left">Total Package*</label>
                 
                      <InputText value={this.state.Current_Total_package} onChange={(e) => this.setState({ Current_Total_package: e.target.value })}
                              className="form-control" placeholder="Total Package"/>
                    </div>
                    <div className="form-group ">
                      <label className = "float-left">Expected Date of
                        Joining*</label>
                     
                      <InputText value={this.state.Current_Expected_Date_of_Joining} onChange={(e) => this.setState({ Current_Expected_Date_of_Joining: e.target.value })}
                              className="form-control" placeholder="mm/dd/yyyy"/>
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card m-b-30">
          <div className="card-body">
         
            <h5>EXPECTED SALARY PACKAGE</h5> <br />
            <div className="row">
              <div className="col-md-4">
                <div className="p-20">
                  <form action="#">
                    <div className="form-group">
                      <label className = "float-left">Basic*</label>
                    
                      <InputText value={this.state.Expected_basic} onChange={(e) => this.setState({ Expected_basic: e.target.value })}
                              className="form-control" placeholder="Basic"/>
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Housing*</label>
                     
                      <InputText value={this.state.Expected_Housing} onChange={(e) => this.setState({ Expected_Housing: e.target.value })}
                              className="form-control" placeholder="Housing"/>
                    </div>
                  </form>
                </div>
              </div> {/* end col */}
              <div className="col-md-4">
                <div className="p-20">
                  <form action="#">
                    <div className="form-group">
                      <label className = "float-left"> Transportation*</label>
                   
                      <InputText value={this.state.Expected_Transportation} onChange={(e) => this.setState({ Expected_Transportation: e.target.value })}
                              className="form-control" placeholder="Transportation"/>
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Other Allowances*</label>
                   
                      <InputText value={this.state.Expected_Other_allowances} onChange={(e) => this.setState({ Expected_Other_allowances: e.target.value })}
                              className="form-control" placeholder="Other Allowances"/>
                    </div>
                  </form>
                </div>
              </div> {/* end col */}
              <div className="col-md-4">
                <div className="p-20">
                  <form action="#">
                    <div className="form-group m-b-0">
                      <label className = "float-left">Total Package*</label>
                     
                      <InputText value={this.state.Expected_Total_package} onChange={(e) => this.setState({ Expected_Total_package: e.target.value })}
                              className="form-control" placeholder="Total Package"/>
                    </div>
                    <div className="form-group m-b-0">
                      <label className = "float-left">Expected Date of Joining*</label>
                     
                      <InputText value={this.state.Expected_Expected_Date_of_Joining} onChange={(e) => this.setState({ Expected_Expected_Date_of_Joining: e.target.value })}
                              className="form-control" placeholder="Expected Date of Joining"/>
                    </div>
                  </form>
                </div>
              </div>
            </div> {/* end col */}
            {/* end row */}
            {/* <div style={{marginLeft: '900px'}}>
              <a href="form-mask7.html" className="btn btn-primary">« Previous</a>
              <a href="Dashboard" onClick={this.myFunc} className="btn btn-primary">Finish »</a>
            
            </div> */}
<br></br>
<div className="submit-button">
                      <Link to ="/FormPage4">
                    <button style={{ float: 'right' }}
                        className="btn btn-primary mr-2"
                        type="submit"
                        onClick={this.myFunc}
                      >
                        Submit 
          </button></Link>
          <Link to ="/FormPage2">
                      <button style={{ float: 'right' }}
                        className="btn btn-primary mr-2"
                        type="submit"
                       
                      >
                        Previous
          </button>
          </Link>
                    </div>
           
          
          </div>
  
         
        </div>
      </div>
    </div> {/* end col */}
  </div> {/* end row */}
  {/* end wrapper */}


  <FooterPage />
</div>


        )
    }
}


export default Form7;