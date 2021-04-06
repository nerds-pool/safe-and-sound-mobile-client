import { SET_APP_TO_PHI_MODE } from "./actions.types";

export default (state, action) => {
  switch (action.type) {
    case SET_APP_TO_PHI_MODE:
      return action.payload;
    default:
      return state;
  }
};
