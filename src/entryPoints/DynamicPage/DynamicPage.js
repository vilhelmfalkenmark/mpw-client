import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import { setTokenCookie, deleteTokenCookie } from "utils/helpers/cookies";

import s from "./DynamicPage.css";

class DynamicPage extends Component {
  constructor() {
    super();

    this.handleSetTokenCookie = this.handleSetTokenCookie.bind(this);
    this.handleDeleteTokenCookie = this.handleDeleteTokenCookie.bind(this);
  }

  handleSetTokenCookie() {
    setTokenCookie({ token: "abc123" });
  }

  handleDeleteTokenCookie() {
    deleteTokenCookie();
  }

  render() {
    // const { currentUser, authenticated } = this.props;

    return (
      <main className={s({ container: true })}>
        <h1>DynamicPage route</h1>
        <button onClick={this.handleSetTokenCookie}>Sätt en token kaka</button>
        <button onClick={this.handleDeleteTokenCookie}>
          Radera en token kaka
        </button>
      </main>
    );
  }
}

export default WithCss(DynamicPage, s);
