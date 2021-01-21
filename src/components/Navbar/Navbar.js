import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link className="brand" to="/">
          BL
        </Link>
        <div className="navbar-item">
          <Link className="item-projects" to="/contact">
            Resume
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="item-sayhi" to="/contact">
            Say Hi
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
