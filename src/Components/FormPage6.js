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
import { Link } from 'react-router-dom';
import { Steps } from 'primereact/steps';


class Form6 extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 5,
      Company_name: "",
      Industry: "",
      Designation: "",
      Reason_of_leaving: "",
      Start_date: "",
      End_date: "",
      Company_name2: "",
      Industry2: "",
      Reason_of_leaving2: "",
      Designation2: "",
      Start_date2: "",
      End_date2: "",
    }
    this.items = [
      {
        label: '1',
        command: (event) => {

        }
      },

      {
        label: '2',
        command: (event) => {

        }
      },
      {
        label: '3',
        command: (event) => {

        }
      },
      {
        label: '4',
        command: (event) => {

        }
      },
      {
        label: '5',
        command: (event) => {

        }
      },
      {
        label: '6',
        command: (event) => {

        }
      },
      {
        label: '7',
        command: (event) => {

        }
      }
    ];
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
                  <h5>Step 6 of 7</h5>
                  <Steps model={this.items} activeIndex={this.state.activeIndex} readOnly={false} />
                  <h4>WORK EXPERIENCE </h4>
                  <br />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label className="float-left" >Company Name *</label>

                            <InputText value={this.state.Company_name} onChange={(e) => this.setState({ Company_name: e.target.value })}
                              className="form-control" placeholder="Company Name " />
                          </div>
                          <div className="form-group">
                            <label className="float-left">Industry*</label>

                            <InputText value={this.state.Industry} onChange={(e) => this.setState({ Industry: e.target.value })}
                              className="form-control" placeholder="Industry" />
                          </div>
                          <div className="form-group">
                            <label className="float-left">Designation*</label>

                            <InputText value={this.state.Designation} onChange={(e) => this.setState({ Designation: e.target.value })}
                              className="form-control" placeholder="Designation" />
                          </div>
                          <div className="form-group ">
                            <label className="float-left">Reason of Leaving
                            (resignation/
                            termination/ other -
                        specify)*</label>

                            <InputText value={this.state.Reason_of_leaving} onChange={(e) => this.setState({ Reason_of_leaving: e.target.value })}
                              className="form-control" placeholder="Reason of Leaving" />
                          </div>
                          <div className="form-group m-b-0">
                            <label className="float-left">Duration*</label>
                            <div className="input-daterange input-group" id="date-range">

                              <InputText value={this.state.Start_date} onChange={(e) => this.setState({ Start_date: e.target.value })}
                                className="form-control" name="start" placeholder="Start Date" />

                              <InputText value={this.state.End_date} onChange={(e) => this.setState({ End_date: e.target.value })}
                                className="form-control" name="end" placeholder="End date" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label ><br /></label>
                            <input type="text" placeholder="Company Name" className="form-control" />

                          </div>
                          <div className="form-group">
                            <label><br /></label>
                            <input type="text" placeholder="Industry" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label><br /></label>
                            <input type="text" placeholder="Designation" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label><br /></label>
                            <input type="text" placeholder="Reason of Leaving" className="form-control" />
                          </div>
                          <div className="form-group m-b-0">
                            <label><br /></label>
                            <div className="input-daterange input-group" id="datepicker">
                              <input type="text" className="form-control col-6" name="start" placeholder="Start Date" />
                              <input type="text" className="form-control  col-6" name="end" placeholder="End Date" />
                            </div>
                          </div>
                        </form>
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                      <div className="submit-button">
                        <Link to="/FormPage7">
                          <button style={{ float: 'right' }}
                            className="btn btn-primary mr-2"
                            type="submit"

                          >
                            Continue
          </button></Link>
                        <Link to="/FormPage5">
                          <button style={{ float: 'right' }}
                            className="btn btn-primary mr-2"
                            type="submit"

                          >
                            Previous
          </button>
                        </Link>
                      </div>
                      <br />
                      <br />

                    </div> {/* end col */}
                  </div> {/* end row */}
                </div>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
          {/* end container */}
        </div>
        {/* end wrapper */}


        <FooterPage />
      </div>


    )
  }
}


export default Form6;
