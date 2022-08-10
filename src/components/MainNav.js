import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mt-2">
     <ul className="navbar-nav mr-auto mt-2 mt-lg-0  ">
      <li className="nav-item text-dark">
      <NavLink
        to="/"
        exact
        className="nav-link px-1 py-1 mr-3"
        activeClassName="nav-link active font-weight-bold"
      >
        Home
      </NavLink>
    </li>
    <li className="nav-item text-dark">
      <NavLink
        to="/profile"
        exact
        className="nav-link px-1 py-1 mr-3"
        activeClassName="nav-link active font-weight-bold"
      >
        Profile
      </NavLink>
    </li>
    <li className="nav-item text-dark">
      <NavLink
        to="/transcribe"
        exact
        className="nav-link px-1 py-1 mr-3"
        activeClassName="nav-link active font-weight-bold"
      >
        Transcribe
      </NavLink>
    </li>
  </ul>
  </div>
);

export default MainNav;