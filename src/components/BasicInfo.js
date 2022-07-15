// imports
import { Fragment } from "react";

const BasicInfo = ({ nextStep, handleChange }) => {
  const handleNextStep = () => {
    nextStep();
  };

  return (
    <Fragment>
      <h2>Welcome! First things first...</h2>
      <p className="sub-heading">You can always change them later</p>
      <div className="form-group">
        <label> Full Name </label>
        <input
          name="fullName"
          type="text"
          className="form-control"
          placeholder="Steve Jobs"
          onChange={handleChange("fullName")}
        />
      </div>
      <div className="form-group">
        <label> Display Name </label>
        <input
          name="displayName"
          type="text"
          className="form-control"
          placeholder="Steve"
          onChange={handleChange("displayName")}
        />
      </div>
      <button
        type="button"
        className="btn submit-button"
        onClick={handleNextStep}
      >
        Create Workspace
      </button>
    </Fragment>
  );
};

export default BasicInfo;
