import React from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
    <div className="main-navbar">
    <div className="navbar">
          <div className="logo">
           <img src={logo} alt="" />
          </div>
          <nav>
            <ul className="text_sub nav_text ">
              <li><a href="" className="active_text">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Resume</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
      </div>   
    </div>
     
      
     
    </>
  );
};

export default Navbar;
