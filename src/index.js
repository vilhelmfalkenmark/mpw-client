import React from "react";
import { render } from "react-dom";
import Root from "./layout/Root";
import { ApolloProvider } from "react-apollo";
import client from "apollo";
import store from "reduxStore/store";
import WithCssContext from "hocs/styles/WithCssContext";

import { onInsertCssHandler } from "hocs/styles/WithCss";

import registerServiceWorker from "./registerServiceWorker";

render(
  <WithCssContext onInsertCss={onInsertCssHandler}>
    <ApolloProvider client={client} store={store}>
      <Root />
    </ApolloProvider>
  </WithCssContext>,
  document.getElementById("root")
);

registerServiceWorker();
