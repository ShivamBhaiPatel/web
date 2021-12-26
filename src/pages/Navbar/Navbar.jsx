import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from'../../images/sparklogo.jpeg';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary Sticky-top">
        <div className="container-fluid">
          <div className="logo">
          <NavLink
            activeClassName="menu_active"
            className="navbar-brand"
            to="/"
          >
            <img src={logo} alt="logo image" className="logo" />
            <strong>SPARK</strong>
            <span className="logo-subtitle"> Society</span>
          </NavLink>
          
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            aria-controls="navbarNavDropdown"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item 
              active">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="menu_active"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="menu_active"
                  to="/gallery"
                >
                  Gallary
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="menu_active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
