import { SET_USER, SET_MODE } from "../actions/action.types";

const user = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case SET_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default user;
