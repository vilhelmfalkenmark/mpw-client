import React, { Component } from "react";

import WithCss from "hocs/styles/WithCss";
import s from "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className={s({ container: true })}>
        <p>Footer</p>
      </footer>
    );
  }
}
export default WithCss(Footer, s);
