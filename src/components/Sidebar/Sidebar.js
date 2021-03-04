import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
  const [search, setsearch] = useState("Search");
  return (
    <div className="wrapper">
      <div className="sidenav">
        <h4>CBRE DEVX Platform</h4>
        <ul>
          <li className="searchStyle">
            <i className="fas fa-search"></i>
            <input
              className="search"
              type="text"
              value={search}
              onChange={(event) => setsearch(event.target.value)}
              placeholder="Search"
            />
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
              to="/services"
              style={{ textDecoration: "none", color: "white" }}
            >
              Apis
            </NavLink>
          </li>
          <li>
            <i className="fas fa-book-open"></i>
            <NavLink
              to="/libraries"
              style={{ textDecoration: "none", color: "white" }}
            >
              Libraries
            </NavLink>
          </li>
          <li>
            <i className="fas fa-adjust"></i>
            <NavLink
              to="/ux"
              style={{ textDecoration: "none", color: "white" }}
            >
              UX
            </NavLink>
          </li>
          <li>
            <i className="fas fa-crop"></i>
            <NavLink
              to="/framework"
              style={{ textDecoration: "none", color: "white" }}
            >
              Framework
            </NavLink>
          </li>

          <li>
            <i style={{ marginRight: "13px" }} className="far fa-file-word"></i>
            <NavLink
              to="/docs"
              style={{ textDecoration: "none", color: "white" }}
            >
              Docs{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
