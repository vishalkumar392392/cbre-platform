import React from "react";
import { connect } from "react-redux";

function Library(props) {
  props.onRemoveHeader();

  const lib3 = (
    <div>
      <table class="table table-bordered ">
        <thead style={{ backgroundColor: "#f4f5f7" }}>
          <tr style={{
            textAlign: "center",
            whiteSpace: "nowrap" }}>
            <th style={{ width: "5%" }}>Project Name</th>
            <th style={{ width: "25%" }}>Description</th>
            <th style={{ width: "6%" }}>Documentation</th>
            <th style={{ width: "4%" }}>Product Owners</th>
            <th style={{ width: "1%" }}>Technology Stack</th>
            <th style={{ width: "8%" }}>Support Contacts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Node Js Logging Library </td>
            <td>
              This package takes an opinionated approach by considering defaults
              for many configurations, at the same time it is flexible and can
              be configured as per need. Key features provided by this package
            </td>
            <td>
              https://dev.azure.com/cbre/Advisory %20And%20Transactions/
              _git/nodejs-logger?path=%2FREADME.md_a=preview
            </td>

            <td>
              <div>Suresh Veguru</div>
            </td>
            <td>Nodejs</td>
            <td>Suresh Veguru </td>
          </tr>

          {/* <tr>
         <td>Performance Scripting and Reporting Framework</td>
         <td>Framework streamline the activities around performance simulation, monitoring, collating results and continuously delivering reports.</td>
         <td>

             <div >
                 Performance Reporting Stack
                 Samples
             </div>

         </td>
         <td>@Anand, Puneet Kumar @ Hyderabad</td>
         <td><div>
             Javascript, Groovy

         </div>

         </td>
         <td> @Chaithanya, Papasani @ Hyderabad</td>
     </tr> */}
        </tbody>
      </table>
    </div>
  );
  const lib2 = (
    <div>
      <table class="table table-bordered ">
        <thead style={{ backgroundColor: "#f4f5f7" }}>
          <tr>
            <th style={{ width: "5%" }}>Project Name</th>
            <th style={{ width: "3%" }}>Description</th>
            <th style={{ width: "6%" }}>Documentation</th>
            <th style={{ width: "4%" }}>Product Owners</th>
            <th style={{ width: "1%" }}>Technology Stack</th>
            <th style={{ width: "8%" }}>Support Contacts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Node Js Logging Library</td>
            <td>
              This package takes an opinionated approach by considering defaults
              for many configurations, at the same time it is flexible and can
              be configured as per need. Key features provided by this package
            </td>
            <td>
              {" "}
              https://dev.azure.com/cbre/Advisory%20And%20Transactions/_git/nodejs-logger?path=%2FREADME.md&_a=preview
            </td>
            <td>
              <div>@S, Bharathesh @ Hyderabad</div>
            </td>
            <td>Nodejs</td>
            <td>@S, Bharathesh @ Hyderabad </td>
          </tr>

          <tr>
            <td>Pinaka QE Framework</td>
            <td>Framework automation testing using selenium</td>
            <td>
              <div>Link</div>
            </td>
            <td>Rohit Anney</td>
            <td>
              <div>
                Java Cucumber(serenity) API Automation(Rest Assured with
                senerity),DB Automation
              </div>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const lib = (
    <div>
      <div>
        <table class="table table-bordered ">
          <thead style={{ backgroundColor: "#f4f5f7" }}>
            <tr>
              <th style={{ width: "5%" }}>Project Name</th>
              <th style={{ width: "3%" }}>Description</th>
              <th style={{ width: "20%" }}>Documentation</th>
              <th style={{ width: "4%" }}>Product Owners</th>
              <th style={{ width: "1%" }}>Technology Stack</th>
              <th style={{ width: "8%" }}>Support Contacts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Node Js Logging Library</td>
              <td>
                This package takes an opinionated approach by considering
                defaults for many configurations, at the same time it is
                flexible and can be configured as per need. Key features
                provided by this package
              </td>
              <td>
                <div style={{ wordWrap: "break-word", width: "20%" }}>
                  https://dev.azure.com/cbre/Advisory%20And%20Transactions/_git/nodejs-logger?path=%2FREADME.md&_a=preview
                </div>
              </td>
              <td>@S, Bharathesh @ Hyderabad</td>
              <td>Nodejs</td>
              <td>@S, Bharathesh @ Hyderabad</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return <div style={{ margin: "30px 20px" }}>{lib3}</div>;
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddHeader: () => dispatch({ type: "ADD_FRAMEWORK" }),
    onRemoveHeader: () => dispatch({ type: "REMOVE_HEADER" }),
  };
};
export default connect(null, mapDispatchToProps)(Library);
