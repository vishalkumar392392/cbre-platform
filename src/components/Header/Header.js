import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header(props) {
  return (
    <div>
      <div className="header">
        <h2>Paree looys, Guest!</h2>
        <h6>CBRE Service Catalog</h6>
      </div>

      <nav>
        <ul class="main-nav">
          <li>
            <NavLink to="/serivces">SERVICES </NavLink>
          </li>
          <li>
            <NavLink to="/libraries">Libraries</NavLink>
          </li>
          <li>
            <NavLink to="/ux">UX</NavLink>
          </li>
          <li>
            <NavLink to="/framework">Frameworks</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
