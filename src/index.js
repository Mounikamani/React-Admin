import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Dashboard from './Components/Dashboard';
import Form1 from './Components/FormPage1'; 
import Form2 from './Components/FormPage2'; 
import Form3 from './Components/FormPage3';  
import Form4 from './Components/FormPage4';       
import Form6 from './Components/FormPage6'; 
import Form5 from './Components/FormPage5';  
import Form7 from './Components/FormPage7'; 
import Candidate from './Components/CandidateListPage';
import HeaderPage from './Components/HeaderPage';
import FooterPage from './Components/FooterPage';
import LoginPage from './Components/LoginPage';
import StepBar from './Components/StepProgressBar';


ReactDOM.render(
  
   <Router>
     
     <Route exact path="/">
    <Redirect to="/LoginPage" />
</Route>
     
     <Route path="/Dashboard" component = { Dashboard } />
     <Route path="/FormPage1" component = { Form1 } />
     <Route path="/FormPage2" component = { Form2 } />
     <Route path="/FormPage3" component = { Form3 } />
     <Route path="/FormPage4" component = { Form4 } />
     <Route path="/FormPage5" component = { Form5 } />
     <Route path="/FormPage6" component = { Form6 } />
     <Route path="/FormPage7" component = { Form7 } />
     <Route path="/CandidateListPage" component = { Candidate } />
     <Route path="/HeaderPage" component = { HeaderPage } />
     <Route path="/FooterPage" component = { FooterPage } />
     <Route path="/LoginPage" component = { LoginPage } />
     <Route path="/StepProgressBar" component = { StepBar } />
 

     
</Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
