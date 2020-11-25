var initialState = {
  update: 0,
};

const update = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATEINCREASE":
      console.log("UPDATEINCREASE increase");
      return { ...state, update: state.update + 1 };
    default:
      return state;
  }
};

export default update;
