import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import s from "./Root.css";

class Root extends Component {
  render() {
    return (
      <div
        className={s({ container: true, loggedIn: this.props.userLoggedIn })}
      >
        <h1>Mypages Web</h1>
      </div>
    );
  }
}

export default WithCss(Root, s);
