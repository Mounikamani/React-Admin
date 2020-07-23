import React, { Component } from 'react';
import ReactDom from 'react-dom';
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
import {Link} from 'react-router-dom';


class Form2 extends Component {
  constructor() {
    super();
    this.state = {
      Issuing_country: "",
      Issued_by: "",
      passport_expiry_date: "",
      Passport_number: "",
      Passport_issue_date: "",
      Visa_type: "",
      Visa_number: "",
      Visa_expiry_date: "",
      Current_sponsor: "",
      Visa_issue_date: "",
      Driving_license: "",
      Issue_date: "",
      Vehicle_type: "",
      Expiry_date: "",
      Driving_license: "",
      Issue_date: "",
      Vehicle_type: "",
      Expiry_date: "",
    }


  }
  render() {
    return (
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
                <h3 style={{color:'red'}}>Step 2 of 7</h3> <br></br>
                  <h4 style={{ textAlign: 'left' }}>PASSPORT </h4>
                  <br />
                  <div className="row">
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label className="float-left">Issuing Country*</label>

                            <InputText value={this.state.Issuing_country} onChange={(e) => this.setState({ Issuing_country: e.target.value })}
                              className="form-control" placeholder="Issuing Country" />
                          </div>
                          <div className="form-group">
                            <label className="float-left">Passport Number*</label>

                            <InputText value={this.state.Passport_number} onChange={(e) => this.setState({ Passport_number: e.target.value })}
                              className="form-control" placeholder="Passport Number" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group ">
                            <label className="float-left">Issued By*</label>

                            <InputText value={this.state.Issued_by} onChange={(e) => this.setState({ Issued_by: e.target.value })}
                              className="form-control" placeholder="Issued By" />
                          </div>
                          <div className="form-group">
                            <label className="float-left">Passport Issue Date*</label>

                            <InputText value={this.state.Passport_issue_date} onChange={(e) => this.setState({ Passport_issue_date: e.target.value })}
                              className="form-control" placeholder="mm/dd/yyyy" />
                            <div className="input-group-append bg-custom b-0" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group m-b-0">
                            <label className="float-left">Passport Expiry Date*</label>

                            <InputText value={this.state.passport_expiry_date} onChange={(e) => this.setState({ passport_expiry_date: e.target.value })}
                              className="form-control" placeholder="mm/dd/yyyy" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* uae row */}
          <div className="row">
            <div className="col-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 style={{ textAlign: 'left' }}>UAE VISA </h4>
                  <br />
                  <div className="row">
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label className="float-left">Visa Type*</label>


                            <InputText value={this.state.Visa_type} onChange={(e) => this.setState({ Visa_type: e.target.value })}
                              className="form-control" placeholder="Visa Type" />
                          </div>
                          <div className="form-group">
                            <label className="float-left">Current Sponsor*</label>


                            <InputText value={this.state.Current_sponsor} onChange={(e) => this.setState({ Current_sponsor: e.target.value })}
                              className="form-control" placeholder="Current Sponsor" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label className="float-left">Visa Number*</label>

                            <InputText value={this.state.Visa_number} onChange={(e) => this.setState({ Visa_number: e.target.value })}
                              className="form-control" placeholder="Visa Number" />
                          </div>
                          <div className="form-group">
                            <label className="float-left">Visa Issue Date*</label>

                            <InputText value={this.state.Visa_issue_date} onChange={(e) => this.setState({ Visa_issue_date: e.target.value })}
                              className="form-control" placeholder="mm/dd/yyyy" />
                            <div className="input-group-append bg-custom b-0" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label className="float-left">Visa Expiry Date*</label>
                            <div className="input-group-append bg-custom b-0" />
                            <InputText value={this.state.Visa_expiry_date} onChange={(e) => this.setState({ Visa_expiry_date: e.target.value })}
                              className="form-control" placeholder="mm/dd/yyyy" />
                          </div>
                          <br />
                          <br />
                          <br />
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
              <div className="card m-b-10">
                <div className="card-body">
                  <h4 style={{ textAlign: 'left' }}>UAE DRIVING LICENSE</h4>
                  <br />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="p-20">
                        <div className="form-group">
                          <label className="float-left">Driving License*</label>
                         
                          <InputText value={this.state.Driving_license} onChange={(e) => this.setState({ Driving_license: e.target.value })}
                              className="form-control" placeholder="Driving License"/>
                        </div>
                        <div className="form-group">
                          <label className="float-left">Vehicle Type*</label>
                         
                          <InputText value={this.state.Vehicle_type} onChange={(e) => this.setState({ Vehicle_type: e.target.value })}
                              className="form-control"  placeholder="Vehicle Type" />
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-6">
                      <div className="p-20">
                        <div className="form-group">
                          <label className="float-left">Issue Date*</label>
                        
                          <InputText value={this.state.Issue_date} onChange={(e) => this.setState({ Issue_date: e.target.value })}
                              className="form-control"  placeholder="mm/dd/yyyy" />
                          
                        </div>
                        <div className="form-group m-b-0">
                          <label className="float-left">Expiry Date*</label>
                       
                        
                          <InputText value={this.state.Expiry_date} onChange={(e) => this.setState({ Expiry_date: e.target.value })}
                              className="form-control" placeholder="mm/dd/yyyy" />
                        </div>
                        <br />
                      </div>
                    </div>
                    {/* end col */}
                    {/* end col */}
                  </div>{/* end row */}
                  <div className="submit-button">
                <Link to="/FormPage3">
                      <button style={{ float: 'right' }}
                        className="btn btn-primary mr-2"
                        type="submit"
                        
                      >
                        Continue 
                      
                        </button> 
                        </Link>
                        <Link to="/FormPage1">
                      <button style={{ float: 'right' }}
                        className="btn btn-primary mr-2"
                        type="submit"
                       
                      >
                        Previous
          </button> </Link>
                    </div>
                </div>
              </div>
            </div> {/* end col */}
          </div>

        {/* end row */ }
  </div > {/* end container */ }

    {/* end wrapper */ }

    <FooterPage />
</div >


        )
  }
}


export default Form2;