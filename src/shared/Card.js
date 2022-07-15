import "./Card.css";

const Card = (props) => {
  const changeCardSelection = () => {
    props.activateCard(props.cardData.id);
  };

  // className={`circle ${progress ? "active" : ""}`}

  return (
    <div
      id={props.cardData.id}
      className={`card ${props.cardData.active ? "card-active" : ""}`}
      onClick={changeCardSelection}
    >
      <div className="card-logo">
        <img src={props.cardData.logo} className="App-logo" alt="logo" />
      </div>
      <div className="card-heading">{props.cardData.cardHeading}</div>
      <div className="card-content">{props.cardData.cardContent}</div>
    </div>
  );
};

export default Card;
