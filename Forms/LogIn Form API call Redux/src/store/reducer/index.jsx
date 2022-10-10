const INITIAL_STATE = {
  users: null,
};
export default (state = INITIAL_STATE, action) => {
  console.log("reducer=>", action);
  switch (action.type) {
    case "SETDATA":
      return {
        ...state,
        users: action.payload,
      };
  }
  return state;
};
