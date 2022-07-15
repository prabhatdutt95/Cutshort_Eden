// React lib & Logo
import { Fragment, useState } from "react";
import logo from "../logo.svg";

// Custom Components
import Pagination from "../shared/Pagination";
import BasicInfo from "./BasicInfo";
import WorkspaceInfo from "./WorkspaceInfo";
import PlanningInfo from "./PlanningInfo";
import Congratulations from "./Congratulations";

// Constants
import CONSTANTS from "../constants/constants";

const Home = () => {
  const sectionInfo = CONSTANTS.SECTION_INFO;
  const [pageData, setPageData] = useState(CONSTANTS.INITIAL_PAGE_STATE);
  const [currentPage, setCurrentPage] = useState(CONSTANTS.INITIAL_PAGE_INDEX);
  const [userData, setUserData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    planWhereToUse: null,
  });

  // handle page change for pagination
  const handlePageChange = (currentPage) => {
    let previousPageData = pageData;
    previousPageData[currentPage - 1] = true;
    setPageData((prevState) => previousPageData);
  };

  // proceed to the next step
  const nextStep = () => {
    setCurrentPage((prevState) => {
      handlePageChange(prevState + 1);
      return prevState + 1;
    });
  };

  // handle field change
  const handleChange = (input) => (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [input]: e.target.value,
    }));
  };

  // handle Planning-info data
  const handlePlanWhereToChange = (id) => {
    setUserData((prevState) => ({
      ...prevState,
      planWhereToUse: id === 1 ? "Self" : "Team",
    }));
  };

  // handle view of different components in different pages
  const handleSwitchCase = () => {
    const section = sectionInfo[currentPage - 1];
    switch (section) {
      case "Basic-Info":
        return <BasicInfo nextStep={nextStep} handleChange={handleChange} />;
      case "Workspace-Info":
        return (
          <WorkspaceInfo nextStep={nextStep} handleChange={handleChange} />
        );
      case "Planning-Info":
        return (
          <PlanningInfo
            nextStep={nextStep}
            handlePlanWhereToChange={handlePlanWhereToChange}
          />
        );
      case "Congratulations":
        return <Congratulations userData={userData} />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Eden</h2>
      </header>
      <main>
        <section>
          <Pagination progressData={pageData} />
        </section>
        <section>{handleSwitchCase()}</section>
      </main>
    </Fragment>
  );
};

export default Home;
