import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav ml-5 mt-2">
     <ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-pills ">
      <li className="nav-item text-dark">
      <NavLink
        to="/"
        exact
        className="nav-link px-3"
        activeClassName="nav-link active"
      >
        Home
      </NavLink>
    </li>
    <li className="nav-item text-dark">
      <NavLink
        to="/profile"
        exact
        className="nav-link px-3"
        activeClassName="nav-link active"
      >
        Profile
      </NavLink>
    </li>
    <li className="nav-item text-dark">
      <NavLink
        to="/transcribe"
        exact
        className="nav-link px-3"
        activeClassName="nav-link active"
      >
        Transcribe
      </NavLink>
    </li>
  </ul>
  </div>
);

export default MainNav;