import React, { Component } from "react";

function AuthenticateBeforeRender({ EntryPoint, Authenticate }) {
  return class extends Component {
    render() {
      return <EntryPoint {...this.props} />;
    }
  };
}

export default AuthenticateBeforeRender;
