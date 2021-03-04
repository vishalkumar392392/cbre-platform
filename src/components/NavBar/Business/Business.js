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
            </tbody>
          </table>
        </div>
      </div>
    );
    setServices(grid);
  };

  const technicalhoverHandler = () => {
    const techniacalGrid = (
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
                <td>Global Advisory</td>
                <td>reportgen-api </td>
                <td>
                  <div>
                    it is a .Net core based service which uses Open XML to
                    generates the reports dynamically...we have Word Templates
                    and configuration based on country...the service receives an
                    input JSON and generates word documents{" "}
                  </div>
                </td>
                <td>VAS</td>
                <td>Neeldeep Roy Suresh Veguru</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
    setServices(techniacalGrid);
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
          onMouseEnter={technicalhoverHandler}
          onMouseLeave={() => setServices(null)}
        />
      </div>
      <div className="col-lg-10">{services}</div>
    </div>
  );
}

export default Business;
