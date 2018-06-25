import React from "react";
import { render } from "react-dom";
import Root from "./layout/Root";
import WithCssContext from "hocs/styles/WithCssContext";

import { onInsertCssHandler } from "hocs/styles/WithCss";

import registerServiceWorker from "./registerServiceWorker";

render(
  <WithCssContext onInsertCss={onInsertCssHandler}>
    <Root />
  </WithCssContext>,
  document.getElementById("root")
);

registerServiceWorker();
