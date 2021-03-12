import React from "react";
import { connect } from "react-redux";

function UxComponent(props) {
  props.onRemoveHeader();
  const ux = (
    <div>
      <table class="table table-bordered ">
        <thead style={{ backgroundColor: "#f4f5f7" }}>
          <tr style={{
            textAlign: "center",
            whiteSpace: "nowrap"}}>
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
            <td>Authorizer Library</td>
            <td>
              VAS Authorizer library is a simple and consistent way to handle
              authentication and authorization within Java based services.
            </td>
            <td></td>
            <td>
              <div>Suresh Veguru</div>
            </td>
            <td>Java, Spring Security, oAuth</td>
            <td>Suresh Veguru </td>
          </tr>

          <tr>
            <td>Performance Scripting and Reporting Framework</td>
            <td>
              Framework streamline the activities around performance simulation,
              monitoring, collating results and continuously delivering reports.
            </td>
            <td>
              <div>Performance Reporting Stack Samples</div>
            </td>
            <td>@Anand, Puneet Kumar @ Hyderabad</td>
            <td>
              <div>Javascript, Groovy</div>
            </td>
            <td> @Chaithanya, Papasani @ Hyderabad</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return <div style={{ margin: "30px 50px" }}>{ux}</div>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddHeader: () => dispatch({ type: "ADD_FRAMEWORK" }),
    onRemoveHeader: () => dispatch({ type: "REMOVE_HEADER" }),
  };
};
export default connect(null, mapDispatchToProps)(UxComponent);
