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


class Form4 extends Component{
  constructor(){
    super();
    this.state = {
      Address_line1:"",
      Region_state:"",
      Address_Line2:"",
      Postal_Code:"",
      Country:"",
      Town_City:"",
      Telephone:"",
      Uae_Address_line1:"",
      Uae_Region_state:"",
      Uae_Address_Line2:"",
      Uae_Postal_Code:"",
      Uae_Country:"",
      Uae_Telephone:"",
      Uae_Town_City:"",
    }
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
          <h3 style={{color:'red'}}>Step 4 of 7</h3> <br></br>
            <h4 style={{textAlign: 'left'}}>HOME COUNTRY</h4> <br />
            <div className="row">
              <div className="col-md-4">
                <div className="p-20">
                  <form>
                    <div className="form-group">
                      <label className = "float-left">Address Line1*</label>
              
                      
                      <InputText value={this.state.Address_line1} onChange={(e) => this.setState({ Address_line1: e.target.value })}
                              className="form-control" placeholder="Address Line1"/>
                    </div>
                    <div className="form-group">
                      <label className = "float-left"> Address Line2*</label>
                      
                      <InputText value={this.state.Address_Line2} onChange={(e) => this.setState({ Address_Line2: e.target.value })}
                              className="form-control"  placeholder="Address Line2"/>
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Town/City*</label>
                     
                      
                      <InputText value={this.state.Town_City} onChange={(e) => this.setState({ Town_City: e.target.value })}
                              className="form-control" placeholder="Town/City"/>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-20">
                  <form>
                    <div className="form-group ">
                      <label className = "float-left">Region/State*</label>
                      
                      <InputText value={this.state.Region_state} onChange={(e) => this.setState({ Region_state: e.target.value })}
                              className="form-control" placeholder="Region/State"/>
                    </div>
                    <div className="form-group ">
                      <label className = "float-left">Postal Code*</label>
                      
                      <InputText value={this.state.Postal_Code} onChange={(e) => this.setState({ Postal_Code: e.target.value })}
                              className="form-control" placeholder="Postal Code"/>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-20">
                  <form>
                    <div className="form-group m-b-0">
                      <label className = "float-left">Telephone Number*</label>
                     
                      <InputText value={this.state.Telephone} onChange={(e) => this.setState({ Telephone: e.target.value })}
                              className="form-control" placeholder="Telephone Number"/>
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Country*</label>
                     
                      <InputText value={this.state.Country} onChange={(e) => this.setState({ Country: e.target.value })}
                              className="form-control" placeholder="Country"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end col */}
    </div> {/* end row */}
    <div className="row">
      <div className="col-12">
        <div className="card m-b-30">
          <div className="card-body">
            <h4 style={{textAlign: 'left'}}>UAE</h4> <br />
            <div className="row">
              <div className="col-md-4">
                <div className="p-20">
                  <form>
                    <div className="form-group">
                      <label className = "float-left">Address Line1*</label>
                   
                      <InputText value={this.state.Uae_Address_line1} onChange={(e) => this.setState({ Uae_Address_line1: e.target.value })}
                              className="form-control" placeholder="Address Line1"/>
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Address Line2*</label>
                      
                      <InputText value={this.state.Uae_Address_Line2} onChange={(e) => this.setState({ Uae_Address_Line2: e.target.value })}
                              className="form-control" placeholder="Address Line2"/>
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Town/City*</label>
                     
                      <InputText value={this.state.Uae_Town_City} onChange={(e) => this.setState({ Uae_Town_City: e.target.value })}
                              className="form-control" placeholder="Town/City"/>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-20">
                  <form>
                    <div className="form-group ">
                      <label className = "float-left">Region/State*</label>
              
                      <InputText value={this.state.Uae_Region_state} onChange={(e) => this.setState({ Uae_Region_state: e.target.value })}
                              className="form-control" placeholder="Region/State"/>
                    </div>
                    <div className="form-group ">
                      <label className = "float-left">Postal Code*</label>
                     
                      <InputText value={this.state.Uae_Postal_Code} onChange={(e) => this.setState({ Uae_Postal_Code: e.target.value })}
                              className="form-control" placeholder="Postal Code"/>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-20">
                  <form>
                    <div className="form-group m-b-0">
                      <label className = "float-left">Telephone Number*</label>
                     
                      <InputText value={this.state.Uae_Telephone} onChange={(e) => this.setState({ Uae_Telephone: e.target.value })}
                              className="form-control" placeholder="Telephone Number"/>
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Country*</label>
                     
                      <InputText value={this.state.Uae_Country} onChange={(e) => this.setState({ Uae_Country: e.target.value })}
                              className="form-control" placeholder="Country"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="submit-button">
                      <Link to ="/FormPage5">
                    <button style={{ float: 'right' }}
                        className="btn btn-primary mr-2"
                        type="submit"
                       
                      >
                        Continue 
          </button></Link>
          <Link to ="/FormPage3">
                      <button style={{ float: 'right' }}
                        className="btn btn-primary mr-2"
                        type="submit"
                        
                      >
                        Previous
          </button>
          </Link>
                    </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>


  <FooterPage />
</div>


        )
    }
}


export default Form4;