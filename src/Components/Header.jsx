import React from "react";
import img from "../images/logo.svg";
import Features from "./Features";
import Company from "./Company";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={img} alt="" />
        <Features />
        <Company />
        <h4>Careers</h4>
        <h4>About</h4>
      </div>
      <div className="header-right">
        <h4>Login</h4>
        <button className="btn-register">Register</button>
      </div>
    </div>
  );
};

export default Header;
