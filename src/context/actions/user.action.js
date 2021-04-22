import { SET_MODE, SET_USER } from "./action.types";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setMode = (mode) => ({
  type: SET_MODE,
  payload: mode,
});
