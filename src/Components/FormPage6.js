import React, { Component } from 'react';
import ReactDom from 'react-dom';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';
import {Link} from 'react-router-dom'


class Form6 extends Component{
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
          <h3 style={{color:'red'}}>Step 6 of 7</h3> <br></br>
            <h4>WORK EXPERIENCE </h4>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="p-20">
                  <form action="#">
                    <div className="form-group">
                      <label className = "float-left" >Company Name *</label>
                      <input type="text" placeholder="Company Name " className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Industry*</label>
                      <input type="text" placeholder="Industry" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className = "float-left">Designation*</label>
                      <input type="text" placeholder="Designation" className="form-control" />
                    </div>
                    <div className="form-group ">
                      <label className = "float-left">Reason of Leaving
                        (resignation/
                        termination/ other -
                        specify)*</label>
                      <input type="text" placeholder="Reason of Leaving" className="form-control" />
                    </div>
                    <div className="form-group m-b-0">
                      <label className = "float-left">Duration*</label>
                      <div className="input-daterange input-group" id="date-range">
                        <input type="text" className="form-control col-6" name="start" placeholder="Start Date" />
                        <input type="text" className="form-control col-6" name="end" placeholder="End Date" />
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
                      <Link to ="/FormPage7">
                    <button style={{ float: 'right' }}
                        className="btn btn-primary mr-2"
                        type="submit"
                     
                      >
                        Continue 
          </button></Link>
          <Link to ="/FormPage5">
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