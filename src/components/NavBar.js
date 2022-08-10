import React from 'react';
import MainNav from './MainNav';
import AuthNav from './AuthNav';
import logo from '../assets/logo/logo.png'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (

      <nav className="navbar navbar-expand-md navbar-light bg-light p-3">
        <div className="container">
        <NavLink to="/" exact className="mr-3"><img src={logo} alt="header" width="40" /></NavLink>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="navbar-collapse" id="navbarNavDropdown">
          <MainNav />
          <AuthNav />
        </div>
        </div>
      </nav>

  );
};

export default NavBar;