import React from "react";
import "./Navbar.css";
import navbarItems from "../NavbarItems";
import { Link, NavLink, withRouter, useHistory } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import logo from "../../asserts/images/logo.svg"
import smily from "../../asserts/images/smily.svg"
import { Container } from "react-bootstrap";
import hamburger from "../../asserts/images/hamburger.svg"
const Navbar = ({ toggle }) => {
  const activeLink = " bg-blue-100 text-black";
  const normalLink = "";
  return (
    <main>
      <nav>
        <Link to="/" className="link">
          <img src={logo} alt="" />
        </Link>
        <div className="menu-items">
        {/* {navbarItems.map((item, index) => (
            <Link to={item.link} key={index} className="link" activeClassName="active">
              {item.title}
            </Link>
            
          ))} */}
          <Link to="/" className="link" activeClassName="active">
              Home
            </Link>
            <Link to="/about" className="link" activeClassName="active">
              About Us
            </Link>
            <Link to="/careers" className="link" activeClassName="active">
              Careers
            </Link>
            <Link to="/contact" className="link" activeClassName="active">
              Contact
            </Link>
        </div>
        <div className="icons">
          <div className="mobile-menu-icon">
            <img src={hamburger} onClick={toggle} />
          </div>
        </div>
      </nav>
    </main>
  );
};

export default withRouter(Navbar);
