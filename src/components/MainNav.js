import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav ml-5 mt-2">
     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
      </NavLink>
    </li>
    <li className="nav-item active">
      <NavLink
        to="/profile"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Profile
      </NavLink>
    </li>
    <li className="nav-item active">
      <NavLink
        to="/transcribe"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Transcribe
      </NavLink>
    </li>
  </ul>
  </div>
);

export default MainNav;