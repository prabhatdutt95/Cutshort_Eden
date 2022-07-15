import React from "react";
import "./Pagination.css";

const Pagination = ({ progressData }) => {
  const progressWidth = progressData[3]
    ? "20.5rem"
    : progressData[2]
    ? "17.25rem"
    : progressData[1]
    ? "11.25rem"
    : "4.5rem";

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" style={{ width: progressWidth }}></div>
        {progressData.map((progress, indexPos) => (
          <div key={indexPos} className={`circle ${progress ? "active" : ""}`}>
            {indexPos + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
