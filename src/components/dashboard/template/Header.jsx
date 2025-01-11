import React,  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png';
import { useAuth } from '../../../store/authContext'
import gatiShakti from '../../../assets/images/gati-shakti.jpeg';

const Header = () => {

  const { logout } = useAuth();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      logout();
    }
  };


  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light " style={{backgroundColor: '#00b9e1'}}>
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button" style={{color:'white', marginTop:'10px'}}><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <img src={Logo} style={{width:'100px'}}/>
      <span style={{color:'white', fontSize:'20px', marginTop:'5px'}}>ASSAM INDUSTRIAL INFRASTRUCTURE DEVELOPMENT CORPORATION</span>
    </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
  <img src={gatiShakti} style={{ width: '100px', marginRight: "40px" }} />
    <li className="nav-item" style={{marginRight:'10px'}}>
   <div style={{color:'white', marginTop:12}}>Logout</div>
    </li>
    
    <li className="nav-item" style={{marginRight:'10px'}}>
    <button type="button" className="btn btn-block btn-success btn-lg" onClick={handleLogout} style={{borderRadius:'150px', backgroundColor:'white', height:'52px'}}><i className="fas fa-power-off" style={{color:'black'}} /></button>
    </li>
   
  </ul>
</nav>

  )
}

export default Header