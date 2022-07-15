// Default values used across the components
const CONSTANTS = {
  INITIAL_PAGE_STATE: [true, false, false, false],
  SECTION_INFO: [
    "Basic-Info",
    "Workspace-Info",
    "Planning-Info",
    "Congratulations",
  ],
  SECTION_DATA: [
    {
      heading: "Welcome! First things first...",
      subHeading: "You can always change them later",
    },
    {
      heading: "Let's set up a home for all your work",
      subHeading: "You can always create another workspace later.",
    },
    {
      heading: "How are you planning to use Eden?",
      subHeading: "We'll streamline your setup experience accordingly.",
      cardData: [
        {
          header: "For myself",
          content: "Write better. Think more clearly. Stay organized.",
        },
        {
          header: "With my team.",
          content: "Wikis, docs, tasks & projects, all in one place.",
        },
      ],
    },
  ],
  INITIAL_PAGE_INDEX: 1,
};

export default CONSTANTS;
