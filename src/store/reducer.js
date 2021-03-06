const initialState = {
  name: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HEADER":
      return {
        ...state,
        name: "API'S",
      };
    case "ADD_FRAMEWORK":
      return {
        ...state,
        name: "Framework",
      };
    case "REMOVE_HEADER":
      return {
        ...state,
        name: null,
      };
    default:
      return state;
  }
};

export default reducer;
