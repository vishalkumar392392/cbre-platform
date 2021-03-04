const initialState = {
  name: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HEADER":
      return {
        ...state,
        name: "APIs",
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
