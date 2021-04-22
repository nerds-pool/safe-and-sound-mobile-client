import { SET_APP_TO_PHI_MODE, SET_USER } from "./actions.types";

const init = {
  mode: "user",
  data: {
    id: null,
    nic: null,
    role: 0,
  },
};

export default (state = init, action) => {
  switch (action.type) {
    case SET_APP_TO_PHI_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
