import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import s from "./DynamicPage.css";

class DynamicPage extends Component {
  render() {
    return (
      <main className={s({ container: true })}>
        <h1>DynamicPage route</h1>
      </main>
    );
  }
}

export default WithCss(DynamicPage, s);
