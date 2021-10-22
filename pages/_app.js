/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import store from "../src/app/store";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default store.withRedux(App);
