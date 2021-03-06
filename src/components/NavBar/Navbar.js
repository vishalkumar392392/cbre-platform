import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Business from "./Business/Business";
import FrameworkElement from "./FrameWorkElement/FrameworkElement";
import Library from "./Librariess/Library";
import "./Navbar.css";
import UxComponent from "./UxComponent/UxComponent";

function Navbar(props) {
  props.onRemoveHeader();

  const [display, setDisplay] = useState(false);
  const [showLibraries, setShowLibraries] = useState(false);
  const [showFrameWorks, setFrameWorks] = useState(false);
  const [showUX, setshowUX] = useState(false);

  const displayButtons = () => {
    setShowLibraries(null);
    setFrameWorks(null);
    setshowUX(null);
    setDisplay(true);
  };

  const libraries = () => {
    setDisplay(null);
    setFrameWorks(null);
    setshowUX(null);
    setShowLibraries(true);
  };

  const framework = () => {
    setDisplay(null);
    setshowUX(null);
    setFrameWorks(true);
    setShowLibraries(null);
  };

  const ux = () => {
    setDisplay(null);
    setshowUX(true);
    setFrameWorks(null);
    setShowLibraries(null);
  };


  const  question = () =>{

    setDisplay(null);
    setshowUX(false);
    setFrameWorks(null);
    setShowLibraries(null);

  }

  return (
    <div>
      <nav>
        <ul className="main-nav">
          <li onClick={displayButtons}>
            <a  style = {{fontFamily: "FuturaBT-Medium,Helvetica,Arial,sans-serif",fontSize:"15px"}}to="/services">SERVICES </a>
          </li>
          <li onClick={libraries}>
            <a style = {{fontFamily: "FuturaBT-Medium,Helvetica,Arial,sans-serif",fontSize:"15px"}}to="/libraries">Libraries</a>
          </li>
          <li onClick={ux}>
            <a style = {{fontFamily: "FuturaBT-Medium,Helvetica,Arial,sans-serif",fontSize:"15px"}} to="/ux">UX</a>
          </li>
          <li  onClick={framework}>
            <a style = {{fontFamily: "FuturaBT-Medium,Helvetica,Arial,sans-serif",fontSize:"15px"}} to="/framework">Frameworks</a>
          </li>

          <li >
            <a onClick={question}style = {{fontFamily: "FuturaBT-Medium,Helvetica,Arial,sans-serif",fontSize:"15px"}}to="/" >Q&amp;A</a>
          </li>
          <li >
            <a onClick={question}style = {{fontFamily: "FuturaBT-Medium,Helvetica,Arial,sans-serif",fontSize:"15px"}}to="/" >Dashboards</a>
          </li>

          <li >
            <a onClick={question} style = {{fontFamily: "FuturaBT-Medium,Helvetica,Arial,sans-serif",fontSize:"15px"}}to="/">Governance</a>
          </li>

        </ul>
      </nav>
      <div>{display === true ? <Business /> : null}</div>
      <div>{showLibraries === true ? <Library /> : null}</div>
      <div>{showFrameWorks === true ? <FrameworkElement /> : null}</div>
      <div>{showUX === true ? <UxComponent /> : null}</div>
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
