import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.scss";
import "./styles.module.css";


const Header = () => {
  return (
    <div class="topnav">
        <a className="name" href="#home">
          Research Management Tool
        </a>
        <a href="/login">SignIn</a>
        <a href="/signup">Register</a>
        <a href="/dashboard">dashboard</a>
        <a class="active" href="#home">
          {" "}
          Home{" "}
        </a>

       
      </div>
  );
};

export default Header;
