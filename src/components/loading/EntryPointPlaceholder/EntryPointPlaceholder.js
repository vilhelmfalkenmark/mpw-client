import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";

import s from "./EntryPointPlaceholder.css";

class EntryPointPlaceholder extends Component {
  render() {
    return (
      <main className={s({ container: true })}>
        <h1>PLACEHOLDER</h1>
      </main>
    );
  }
}

export default WithCss(EntryPointPlaceholder, s);
