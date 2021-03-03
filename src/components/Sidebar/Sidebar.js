import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div className="wrapper">
      <div className="sidenav">
        <h4>CBRE DEVX Platform</h4>
        <ul>
          <li className="searchStyle">
            <i className="fas fa-search"></i>
            <input className="search" type="text" placeholder="Search" />
          </li>

          <li>
            <i className="fas fa-home"></i>
            <NavLink
              to="/home"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <i className="fas fa-puzzle-piece"></i>
            <NavLink
              to="/apis"
              style={{ textDecoration: "none", color: "white" }}
            >
              Apis
            </NavLink>
          </li>
          <li>
            <i className="far fa-file-word"></i>
            <NavLink
              to="/docs"
              style={{ textDecoration: "none", color: "white" }}
            >
              Docs{" "}
            </NavLink>
          </li>
          <li>
            <i className="fas fa-plus"></i>
            <NavLink
              to="/create"
              style={{ textDecoration: "none", color: "white" }}
            >
              Create...{" "}
            </NavLink>
          </li>

          <li className="tech">
            <i className="fas fa-thumbtack"></i>
            <NavLink
              to="/techRadar"
              style={{ textDecoration: "none", color: "white" }}
            >
              Tech Radar{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
