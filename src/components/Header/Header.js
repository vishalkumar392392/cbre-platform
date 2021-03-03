import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./Header.css";
import Content from "../../containers/Content/Content";

function Header(props) {
  return (
    <div>
      <div className="header">
        <h3>CBRE Service Catalog</h3>
      </div>

      <nav>
        <ul className="main-nav">
          <li>
            <NavLink to="/services">SERVICES </NavLink>
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
      <Switch>
        <Route path="/services" component={Content} />
      </Switch>
    </div>
  );
}

export default Header;
