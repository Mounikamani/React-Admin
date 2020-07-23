import React, { Component } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.png';

class HeaderPage extends Component{
    render(){
        return(
<div>
<header id="topnav">
<div className="topbar-main">
        <div className="container-fluid">
          {/* Logo container*/}
          <div className="logo">
            {/* Text Logo */}
            {/*<a href="index.html" class="logo">*/}
            {/*Annex*/}
            {/*</a>*/}
            {/* Image Logo */}
            <a href="Dashboard" className="logo">
              <img src={logo} alt="" height={22} className="logo-small" />
              <img src={logo} alt="" height={40} className="logo-large" />
            </a>
          </div>
          <div className="menu-extras topbar-custom">
        <ul className="list-inline float-right mb-0">
          {/* language*/}
          <li className="list-inline-item dropdown notification-list hide-phone " style={{marginLeft:'-80px'}}>
            <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
              English <img src="assets/images/flags/us_flag.jpg" className="ml-2" height={16} alt="" />
            </a>


          </li>
          <li className="list-inline-item dropdown notification-list" style={{marginLeft:'-80px'}}>
        <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
          <i className="mdi mdi-bell-outline noti-icon" />
          <span className="badge badge-success noti-icon-badge">21</span>
        </a>
        
      </li>
      <li className="list-inline-item dropdown notification-list">
        <a className="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
          <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" />
        </a>
      
      </li>
      <li className="menu-item list-inline-item">
  {/* Mobile menu toggle*/}
  <a className="navbar-toggle nav-link" data-toggle="collapse" 
        data-target=".navbar-collapse">
    <div className="lines">
      <span />
      <span />
      <span />
    </div>
  </a>
  {/* End mobile menu toggle*/}
</li>

        </ul>
        </div>
        <div className="clearfix">

                </div> 
            </div>
            <div className="navbar-custom">
  <div className="container-fluid">
    <div id="navigation">
      {/* Navigation Menu*/}
      <ul className="navigation-menu navbar-collapse" >
        <li className="has-submenu">
          <a href="Dashboard" style={{textDecoration:"none"}}><i className="mdi mdi-airplay" />Dashboard</a>
        </li>
        <li className="has-submenu">
          <a href="FormPage1" style={{textDecoration:"none"}}><i className="mdi mdi-bullseye" />Candidates Form</a>
        </li>
        <li className="has-submenu">
          <a href="CandidateListPage" style={{textDecoration:"none"}}><i className="mdi mdi-bullseye" />Candidates List</a>
        </li>
       
      </ul>
      {/* End navigation menu */}
    </div> {/* end #navigation */}
  </div> {/* end container */}
</div>
</div>
    
</header>

</div>
        )
    }
}


export default HeaderPage;