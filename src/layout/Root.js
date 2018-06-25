import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import s from "./Root.css";

class Root extends Component {
  render() {
    return (
      <div
        className={s({ container: true, loggedIn: this.props.userLoggedIn })}
      >
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default WithCss(Root, s);
