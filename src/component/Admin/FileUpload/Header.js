import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Header = () => {
  return (
    <div className="topnav">
      <h1>File Upload And Download</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/list">
          Files List
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
