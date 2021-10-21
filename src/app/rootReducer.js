import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({})(state, action);
};

export default reducer;
