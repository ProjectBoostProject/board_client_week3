import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import menuReducer from "../feature/menu/utils/menu.reducer";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    menu: menuReducer,
  })(state, action);
};

export default reducer;
