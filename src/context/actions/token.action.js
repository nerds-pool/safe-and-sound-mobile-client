import { SET_TOKEN } from "./action.types";

export const setTokens = (signToken) => ({
  type: SET_TOKEN,
  payload: signToken,
});
