import { all, fork } from "redux-saga/effects";
import { watchMenuSaga } from "../feature/menu/utils/menu.saga";

export default function* rootSaga() {
  yield all([fork(watchMenuSaga)]);
}
