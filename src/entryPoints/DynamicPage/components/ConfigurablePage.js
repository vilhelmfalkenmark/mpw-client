import React, { Component } from "react";
import { setTokenCookie, deleteTokenCookie } from "utils/helpers/cookies";

class ConfigurablePage extends Component {
  constructor() {
    super();

    this.handleSetTokenCookie = this.handleSetTokenCookie.bind(this);
    this.handleDeleteTokenCookie = this.handleDeleteTokenCookie.bind(this);
  }

  handleSetTokenCookie() {
    setTokenCookie({
      token: "abc123"
    });
  }

  handleDeleteTokenCookie() {
    deleteTokenCookie();
  }

  render() {
    return (
      <main>
        {this.props.page ? (
          <h1>{this.props.page.fields.title}</h1>
        ) : (
          <h1> DynamicPage route</h1>
        )}
        <button onClick={this.handleSetTokenCookie}>
          {" "}
          Sätt en token kaka{" "}
        </button>{" "}
        <button onClick={this.handleDeleteTokenCookie}>
          Radera en token kaka{" "}
        </button>{" "}
      </main>
    );
  }
}

export default ConfigurablePage;
