import React, { useState } from "react";
import "../Navbar.css";
function Business(props) {
  const [services, setServices] = useState(null);

  const hoverHandler = () => {
    const grid = (
      <div>
        <div>
          <table class="table table-bordered ">
            <thead style={{ backgroundColor: "#f4f5f7" }}>
              <tr>
                <th style={{ width: "5%" }}>Tower</th>
                <th style={{ width: "3%" }}>API</th>
                <th style={{ width: "6%" }}>Description</th>
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
                  <div>
                    GraphQL based for ingesting any data into EDP Global
                  </div>
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
                  <div>
                    Zoning pricing calculator for Retail properties in UK
                  </div>
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
    setServices(grid);
  };

  return (
    <div className="row NavStyle">
      <div className="col-lg-2">
        <input
          type="button"
          className="btn btn-success btn-sm buttonStyle"
          value="Bussiness Services"
          onMouseEnter={hoverHandler}
          onMouseLeave={() => setServices(null)}
        />
        <input
          type="button"
          className="btn btn-success btn-sm buttonStyle"
          value="Technical Services"
          onMouseEnter={hoverHandler}
          onMouseLeave={() => setServices(null)}
        />
      </div>
      <div className="col-lg-10">{services}</div>
    </div>
  );
}

export default Business;
