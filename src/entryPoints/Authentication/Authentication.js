import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import s from "./Authentication.css";

class Authentication extends Component {
  render() {
    return (
      <main className={s({ container: true })}>
        <h1>Authentication route</h1>
      </main>
    );
  }
}

export default WithCss(Authentication, s);
