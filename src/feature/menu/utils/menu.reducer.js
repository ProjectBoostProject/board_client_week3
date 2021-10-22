/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { addMenuSuccess, getMenuListSuccess } from "./menu.action";

const initialState = {
  menus: [],
};

const reducer = createReducer(initialState, {
  [getMenuListSuccess.type]: (state, action) => {
    const { menus } = action.payload;
    state.menus = menus;
  },
  [addMenuSuccess.type]: (state, action) => {
    const { menu } = action.payload;
    if (state.menus.length < 10) state.menus = [...state.menus, menu];
  },
});

export const selectMenuList = (state) => state.menu.menus;

export default reducer;
