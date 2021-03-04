import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Business from "./Business/Business";
import "./Navbar.css";

function Navbar(props) {
  props.onRemoveHeader();

  const [display, setDisplay] = useState(false);
  const displayButtons = () => {
    setDisplay(true);
  };
  return (
    <div>
      <nav>
        <ul className="main-nav">
          <li onClick={displayButtons}>
            <a to="/services">SERVICES </a>
          </li>
          <li onClick={() => setDisplay(null)}>
            <a to="/libraries">Libraries</a>
          </li>
          <li onClick={() => setDisplay(null)}>
            <a to="/ux">UX</a>
          </li>
          <li onClick={() => setDisplay(null)}>
            <a to="/framework">Frameworks</a>
          </li>
        </ul>
      </nav>
      <div>{display === true ? <Business /> : null}</div>
    </div>
  );
}

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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
