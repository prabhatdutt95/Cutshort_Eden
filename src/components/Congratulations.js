// Imports
import { Fragment } from "react";
import success from "../success.svg";

const Congratulations = ({ userData }) => {
  return (
    <Fragment>
      <img src={success} className="success-icon" alt="success tick icon" />
      <h2>
        Congratulations,{" "}
        {userData.fullName.length ? userData.fullName : "Guest"}!
      </h2>
      <p className="sub-heading">
        You have completed onboarding, you can start using the Eden!
      </p>
      <button type="button" className="btn submit-button">
        Launch Eden
      </button>
    </Fragment>
  );
};

export default Congratulations;
