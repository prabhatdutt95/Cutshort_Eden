// React lib & Logo
import { Fragment, useState } from "react";
import userLogo from "../user.svg";
import teamLogo from "../team.svg";

// Custom-component
import Card from "../shared/Card";

const PlanningInfo = ({ nextStep, handlePlanWhereToChange }) => {
  // Data for each card
  const cardData = [
    {
      id: 1,
      cardHeading: "For myself",
      cardContent: "Write better. Think more clearly. Stay organized.",
      logo: userLogo,
      active: false,
    },
    {
      id: 2,
      cardHeading: "With my team.",
      cardContent: "Wikis, docs, tasks & projects, all in one place.",
      logo: teamLogo,
      active: false,
    },
  ];

  const [cardDataState, setCardDataState] = useState(cardData);

  const Continue = () => {
    nextStep();
  };

  const activateCard = (id) => {
    const changedCardState = cardData.map((_) =>
      _.id === id ? { ..._, active: true } : { ..._, active: false }
    );
    setCardDataState((prevState) => changedCardState);
    handlePlanWhereToChange(id);
  };

  return (
    <Fragment>
      <h2>How are you planning to use Eden?</h2>
      <p className="sub-heading">
        We'll streamline your setup experience accordingly.
      </p>
      <div className="d-flex">
        <Card cardData={cardDataState[0]} activateCard={activateCard} />
        <Card cardData={cardDataState[1]} activateCard={activateCard} />
      </div>

      <button type="button" className="btn submit-button" onClick={Continue}>
        Create Workspace
      </button>
    </Fragment>
  );
};

export default PlanningInfo;
