import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function FrameworkElement(props) {
  console.log(props);
  props.onRemoveHeader();
  const framework = (
    <div>
      <table class="table table-bordered ">
        <thead style={{ backgroundColor: "#f4f5f7" }}>
          <tr style={{
            textAlign: "center",
            whiteSpace: "nowrap"}}
          >
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
            <td>Blocks Design System V2 Pattern Guidance</td>
            <td>GUI Components for React Framework and pattern Guidance</td>
            <td>Block v2</td>
            <td>
              <div>
                @patrick,Rick @ CBRE Build @Gatze,sage @ CBRE Build
                @Glantz,Logan @CBRE Build
              </div>
            </td>
            <td>React,TypeScript,Sass</td>
            <td>
              Block Slack Channel (pin "@blocks-council" to alert Rick Sage and
              Logan){" "}
            </td>
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
  return <div style={{ margin: "30px 50px" }}>{framework}</div>;
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddHeader: () => dispatch({ type: "ADD_FRAMEWORK" }),
    onRemoveHeader: () => dispatch({ type: "REMOVE_HEADER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FrameworkElement);
