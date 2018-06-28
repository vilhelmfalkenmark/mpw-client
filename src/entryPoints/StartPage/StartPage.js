import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";

import s from "./StartPage.css";

class StartPage extends Component {
  render() {
    // const { currentUser, authenticated } = this.props;

    return (
      <main className={s({ container: true })}>
        <h1>Startsida för nya Linas Matkasse</h1>
      </main>
    );
  }
}

export default WithCss(StartPage, s);
