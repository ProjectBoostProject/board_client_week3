import Router from "next/dist/client/router";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  addMenuStart,
  addMenuSuccess,
  getMenuListStart,
  getMenuListSuccess,
} from "./menu.action";
import { addMenuAPI, getMenuListAPI } from "./menu.api";

function* watchGetMenuListSaga() {
  try {
    const menus = yield call(getMenuListAPI);
    yield put(getMenuListSuccess(menus));
  } catch (e) {
    console.log("Get Menu List Error", e.message);
  }
}

function* watchAddMenuSaga(action) {
  try {
    const { menuName, introduce } = action.payload;
    const menu = yield call(addMenuAPI, menuName, introduce);
    Router.push(`/boards/${menu.id}`);
    yield put(addMenuSuccess(menu));
  } catch (error) {
    console.log("Add Menu Error", error.message);
  }
}

export function* watchMenuSaga() {
  yield takeLatest(getMenuListStart.type, watchGetMenuListSaga);
  yield takeLatest(addMenuStart.type, watchAddMenuSaga);
}
