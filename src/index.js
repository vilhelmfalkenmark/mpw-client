import React from "react";
import { render } from "react-dom";
import Root from "layout/Root";
import { ApolloProvider } from "react-apollo";
import { Provider as ReduxProvider } from "react-redux";

import client from "apollo";
import store from "reduxStore/store";
import WithCssContext from "hocs/styles/WithCssContext";

import { onInsertCssHandler } from "hocs/styles/WithCss";

import registerServiceWorker from "./registerServiceWorker";

render(
  <WithCssContext onInsertCss={onInsertCssHandler}>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <Root />
      </ReduxProvider>
    </ApolloProvider>
  </WithCssContext>,
  document.getElementById("root")
);

registerServiceWorker();
