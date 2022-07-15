// imports
import { Fragment } from "react";

const WorkspaceInfo = ({ nextStep, handleChange }) => {
  const Continue = () => {
    nextStep();
  };
  return (
    <Fragment>
      <h2>Let's set up a home for all your work</h2>
      <p className="sub-heading">
        You can always create another workspace later.
      </p>
      <div className="form-group">
        <label> Workspace Name </label>
        <input
          name="workspaceName"
          type="text"
          className="form-control"
          placeholder="Eden"
          onChange={handleChange("workspaceName")}
        />
      </div>
      <div className="form-group">
        <label>
          {" "}
          Workspace URL <span className="text-muted">(optional)</span>
        </label>
        <input
          name="workspaceUrl"
          type="text"
          className="form-control"
          placeholder="Example"
          onChange={handleChange("workspaceUrl")}
        />
      </div>
      <button type="button" className="btn submit-button" onClick={Continue}>
        Create Workspace
      </button>
    </Fragment>
  );
};

export default WorkspaceInfo;
