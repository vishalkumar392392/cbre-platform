import React from "react";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div className="wrapper">
      <div className="sidenav">
        <h4>CBRE DEVX Platform</h4>
        <ul>
          <li className="search">
            <i class="fas fa-search"></i>Search{" "}
          </li>
          <li>
            <i class="fas fa-home"></i>Home
          </li>
          <li>
            <i class="fas fa-puzzle-piece"></i>Apis
          </li>
          <li>
            <i class="far fa-file-word"></i>Docs
          </li>
          <li>
            <i class="fas fa-plus"></i>Create...
          </li>

          <li className="tech">
            <i class="fas fa-thumbtack"></i>Tech Radar
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
