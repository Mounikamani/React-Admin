import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import HeaderPage from './HeaderPage';
import {Link} from 'react-router-dom'



const Form5 = () => {
  const [inputFields, setInputFields] = useState([
    { name: '', age: '', relation: '', citizenship:'' }
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ name: '', age: '', relation: '', citizenship:'' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    } 
  
    else {
      values[index].age = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  return (
    <>
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
                <h3 style={{color:'red'}}>Step 3 of 7</h3> <br></br>
                  <h3>Family Sponsorship Details</h3>
                  <br></br>
                  <button
                              className="btn btn-primary"
                              type="button"
                              onClick={() => handleAddFields()}
                            > 
                              Add
                           </button>
                           <br></br>
                           <br></br>
                  <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="form-row">
                      {inputFields.map((inputField, index) => (
                        <Fragment key={`${inputField}~${index}`}>
                          <div className="form-group col-sm-3">
                            <label htmlFor="name">Name<br />
                            </label>
                            <input 
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              defaultValue={inputField.name}
                              onChange={event => handleInputChange(index, event)}
                            />
                          </div>
                          <div className="form-group col-sm-3">
                            <label htmlFor="age">Age</label>
                            <input
                              type="text"
                              className="form-control"
                              id="age"
                              name="age"
                              defaultValue={inputField.age}
                              onChange={event => handleInputChange(index, event)}
                            />
                          </div>
                          <div className="form-group col-sm-3">
                            <label htmlFor="relation">Relation</label>
                            <input
                              type="text"
                              className="form-control"
                              id="relation"
                              name="relation"
                              defaultValue={inputField.relation}
                              onChange={event => handleInputChange(index, event)}
                            />
                          </div>
                          <div className="form-group col-sm-3">
                            <label htmlFor="citizenship">Citizenship<br />
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="citizenship"
                              name="citizenship"
                              defaultValue={inputField.citizenship}
                              onChange={event => handleInputChange(index, event)}
                            />
                          </div>
                          <div className="form-group col-sm-12">
                        <button
                              className="btn btn-link"
                              type="button"
                              onClick={() => handleRemoveFields(index)}
                            >
                              Remove
                            </button> 
                            
                          </div>
                        </Fragment>
                      ))}
                    </div> 
                    <div className="submit-button">
                      <Link to ="/FormPage4">
                    <button style={{ float: 'right' }}
                        className="btn btn-primary mr-2"
                        type="submit"
                        onSubmit={handleSubmit}
                      >
                        Continue 
          </button></Link>
          <Link to ="/FormPage2">
                      <button style={{ float: 'right' }}
                        className="btn btn-primary mr-2"
                        type="submit"
                        onSubmit={handleSubmit}
                      >
                        Previous
          </button>
          </Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <pre>
          {JSON.stringify(inputFields, null, 2)}
        </pre> */}
                  </form>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form5;
