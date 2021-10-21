/* eslint-disable no-unused-vars */
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./rootReducer";
import rootSaga from "./rootSaga";

const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({ reducer, middleware: [sagaMiddleware] });
  sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
