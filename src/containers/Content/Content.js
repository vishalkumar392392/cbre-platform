import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Content.css";

function Content(props) {
  const [bussiness, setbussiness] = useState(null);
  const [persons, setPersons] = useState([]);
  const params = useParams();

  useEffect(() => {
    console.log("useeffect");
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((res) => setPersons(res.data.results))
      .catch((res) => console.log(res));
  }, [bussiness]);

  const hoverHandler = (event) => {
    let bus = (
      <div>
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4  border">
            <h5>S.no</h5>
          </div>
          <div className="col-lg-5 col-md-4 col-sm-4  border">
            <h5> Name</h5>
          </div>
          <div className="col-lg-5 col-md-4 col-sm-4  border">
            <h5>{event.target.value}</h5>
          </div>
        </div>
        {persons.map((per, index) => {
          return (
            <div key={index} className="row">
              <div className="col-lg-2 col-md-4 col-sm-4  border">{index}</div>
              <div className="col-lg-5 col-md-4 col-sm-4 border">
                {per.name.first}
              </div>
              <div className="col-lg-5 col-md-4 col-sm-4  border">
                {per.location.country}
              </div>
            </div>
          );
        })}
      </div>
    );
    setbussiness(bus);
  };
  return (
    <div className="mx-5">
      {/* <div>
        <h3 style={{ textTransform: "capitalize" }}>{params.nav}</h3>
      </div> */}
      <input
        type="button"
        className="btn btn-success buttonStyle"
        value="Business"
        onMouseEnter={hoverHandler}
        onMouseLeave={() => setbussiness(null)}
      />
      <input
        type="button"
        className="btn btn-success buttonStyle"
        value="Technical"
        onMouseEnter={hoverHandler}
        onMouseLeave={() => setbussiness(null)}
      />
      {bussiness}
    </div>
  );
}

export default Content;
