import React from "react";
import { NavLink, Route, Switch, useParams } from "react-router-dom";
import "./Header.css";
import Content from "../../containers/Content/Content";
import { connect } from "react-redux";

function Header(props) {
  const params = useParams();
  const navbar = (
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
  );
  return (
    <div>
      <div className="header">
        {props.name === null ? (
          <h3>CBRE Service Catalog</h3>
        ) : (
          <div>
            <h3>{props.name}</h3>
            <p>Devx Api Explorer</p>
          </div>
        )}
      </div>

      {/* {params.services !== null ? navbar : null} */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)(Header);
