const initialRate = { rate: 0 };
const movieStarsFillReducer = (state = initialRate, action) => {
  switch (action.type) {
    case 0:
      return { rate: action.type + 1 };
    case 1:
      return { rate: action.type + 1 };
    case 2:
      return { rate: action.type + 1 };
    case 3:
      return { rate: action.type + 1 };
    case 4:
      return { rate: action.type + 1 };
    case "RESET_RATING":
      return {rate:0};
    default:
      return state;
  }
};

export default movieStarsFillReducer;
