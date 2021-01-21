import React from "react";
import "./Footer.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer">
        <h1>
          <Link to="/">BL</Link>
        </h1>
        <p className="learning">Learning & advancing, one step at a time.</p>
        <div className="plugin-container">
          <i className="fab fa-linkedin-in"></i>
          <i id="lol" className="fab fa-facebook-f"></i>
          <i className="fab fa-github"></i>
          <i className="fas active fa-envelope"></i>
        </div>
        <p className="gray">Made from scratch by me © twentytwentyone</p>
      </div>
    </div>
  );
};

export default Footer;
