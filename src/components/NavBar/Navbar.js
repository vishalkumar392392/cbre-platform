import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const navbar = (props) => {
  props.onRemoveHeader();
  return (
    <div>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveHeader: () => dispatch({ type: "REMOVE_HEADER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(navbar);
