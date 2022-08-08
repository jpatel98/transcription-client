import React from 'react';
import MainNav from './MainNav';
import AuthNav from './AuthNav';
import logo from '../assets/logo/logo.png'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container mb-3 p-1">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
        <NavLink to="/" exact className=""><img src={logo} alt="header" width="40" /></NavLink>
        <button className="navbar-toggler" type="button" toggle="collapse" target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <MainNav />
          <AuthNav />
        </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;