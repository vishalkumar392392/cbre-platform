import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Content.css";
import { connect } from "react-redux";

function Content(props) {
  const [bussiness, setbussiness] = useState(null);
  const [persons, setPersons] = useState([]);
  const params = useParams();

  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.name);
  // console.log(state);
  props.onAddHeader();
  // dispatch({ type: "ADD_HEADER" });
  useEffect(() => {
    console.log("useeffect");
    axios
      .get("https://randomuser.me/api/?results=7")
      .then((res) => setPersons(res.data.results))
      .catch((res) => console.log(res));
  }, []);

  let bus = (
    <div>
      <div class="card" style={{ width: "100%" }}>
        <div class="card-body">
          <div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">SYSTEM</th>
                  <th scope="col">OWNER</th>
                  <th scope="col">LIFECYCLE</th>
                  <th scope="col">TYPE</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">TAGS</th>
                </tr>
              </thead>
              <tbody>
                {persons.map((per) => {
                  return (
                    <tr>
                      <th scope="row" className="textStyle">
                        {per.name.first}
                      </th>
                      <th scope="row" className="textStyle">
                        {per.location.country}
                      </th>
                      <td>{per.name.first}</td>
                      <td>{per.location.country}</td>
                      <td>{per.name.first}</td>
                      <td>{per.location.country}</td>
                      <td>{per.name.first}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const table = (
    <div>
      <div
        className="row fixed"
        style={{ backgroundColor: "#f4f5f7", height: "35px" }}
      >
        <div className="col-lg-1 col-md-4 col-sm-4  border">
          <h6>Tower</h6>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">
          <h6> API</h6>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          <h6>Description</h6>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          <h6>Publishing App</h6>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          <h6>API Contacts</h6>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">CDO</div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">
          EDP Consumption API
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          API to query key mastered data from EDP
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">EDP</div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          Pavan Rajagiri Ranga Komanduri
        </div>
      </div>

      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">CDO</div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">
          EDP_Ingestion_ES
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          GraphQL based for ingesting any data into EDP Global
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">EDP</div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          Pavan Rajagiri Ranga Komanduri
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">CDO</div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">
          china-consumption
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          GraphQL server API for querying the data from EDP Global
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">EDP</div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          Pavan Rajagiri Ranga Komanduri
        </div>
      </div>

      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">CDO</div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">
          china-ingestion
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          GraphQL based for ingesting any data into EDP Global
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">EDP</div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          Pavan Rajagiri Ranga Komanduri
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">CDO</div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">
          edp_gws_datamart_apis_prod
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          Fetch client specific data from their own datamart.
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">EDP</div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">Truy Nguyen</div>
      </div>

      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">GWS</div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">Vendor API</div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          Vendor IT system Integration
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          Facility Source
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          {" "}
          Luchianov, Slava @ Columbus Slava.Luchianov@cbre.com
        </div>
      </div>

      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">GWS</div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">Client API</div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          Client IT system integration
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          Facility Source
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          {" "}
          Luchianov, Slava @ Columbus Slava.Luchianov@cbre.com
        </div>
      </div>

      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">
          Global Advisory
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">
          ZoningCalculator
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          Zoning pricing calculator for Retail properties in UK
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">FinishLine</div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          {" "}
          Jessica Fang (Xi)
        </div>
      </div>

      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">CDO</div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">GPS</div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          Searching for People data on intranet and internet and honoring
          privacy data requirements
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">GPS</div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          {" "}
          Venkat Nagarapu
        </div>
      </div>

      <div className="row">
        <div className="col-lg-1 col-md-4 col-sm-4  border">CDO</div>
        <div className="col-lg-4 col-md-4 col-sm-4  border">
          Geocoding (GC17)
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          Ability to geoCode a given address
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4  border">
          Location Intelligence
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4  border">
          {" "}
          Phadke, Varada @ Dallas Varada.Phadke@cbre.com Alger, Rich @ Location
          Intelligence Rich.Alger@cbre.com
        </div>
      </div>
    </div>
  );

  const grid = (
    <div>
      <div>
        {/* <div>

                    <span>Filter(0)</span>
                    <span className="text-right ">
                        <i className="fas fa-search"></i>
                        <input className="search" type="text" placeholder="Search" />
                    </span>

                    </div> */}

        <table class="table table-bordered ">
          <thead style={{ backgroundColor: "#f4f5f7" }}>
            <tr>
              <th style={{ width: "5%" }}>Tower</th>
              <th style={{ width: "3%" }}>API</th>
              <th style={{ width: "25%" }}>Description</th>
              <th style={{ width: "6%" }}>Publishing App</th>
              <th style={{ width: "8%" }}>API Contacts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CDO</td>
              <td>GPS</td>
              <td>
                <div>API to query key mastered data from EDP</div>
              </td>
              <td>GPS</td>
              <td>Venkat Nagarapu </td>
            </tr>

            <tr>
              <td>CDO</td>
              <td>EDP Consumption Api</td>
              <td>
                <div>
                  Searching for People data on intranet and internet and
                  honoring privacy data requirements
                </div>
              </td>
              <td>EDP</td>
              <td>Pavan Rajagiri</td>
            </tr>

            <tr>
              <td>CDO</td>
              <td>EGeocoding (GC17)</td>
              <td>
                <div>Ability to geoCode a given address</div>
              </td>
              <td>EDP</td>
              <td>Pavan Rajagiri</td>
            </tr>

            <tr>
              <td>GWS</td>
              <td>SI7ServiceRequest</td>
              <td>
                <div>Create/get service request</div>
              </td>
              <td>SI</td>
              <td>John Dagenhardt </td>
            </tr>

            <tr>
              <td>GWS</td>
              <td>CodeEngine</td>
              <td>
                <div>Lookup/Code translations</div>
              </td>
              <td>SI</td>
              <td>John Dagenhardt </td>
            </tr>

            <tr>
              <td>CDO</td>
              <td>EDP_Ingestion_ES</td>
              <td>
                <div>GraphQL based for ingesting any data into EDP Global</div>
              </td>
              <td>EDP</td>
              <td>
                <div>John Dagenhardt Ranga Komanduri</div>
              </td>
            </tr>

            <tr>
              <td>Global Advisory</td>
              <td>ZoningCalculator</td>
              <td>
                <div>Zoning pricing calculator for Retail properties in UK</div>
              </td>
              <td>TBD</td>
              <td>
                <div>Jessica Fang (Xi)</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="m-5">
      <div>
        <h3 style={{ textTransform: "capitalize" }}>{params.nav}</h3>
      </div>
      {grid}
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
    onAddHeader: () => dispatch({ type: "ADD_HEADER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
