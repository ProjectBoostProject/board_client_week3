import { createAction } from "@reduxjs/toolkit";

export const getMenuListStart = createAction("menu/getMenuListStart", () => {
  return { payload: {} };
});

export const getMenuListSuccess = createAction(
  "menu/getMenuListSuccess",
  (menus) => {
    return { payload: { menus } };
  }
);

export const addMenuStart = createAction(
  "menu/addMenuStart",
  (menuName, introduce) => {
    return { payload: { menuName, introduce } };
  }
);

export const addMenuSuccess = createAction("menu/addMenuSuccess", (menu) => {
  return { payload: { menu } };
});
