/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { withReduxSaga } from "next-redux-saga";
import store from "../src/app/store";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default store.withRedux(withReduxSaga(App));
