import React, { Component } from "react";
import Header from "layout/Header";

function EntryPoint({ EntryPoint, RenderHeader, RenderFooter }) {
  return class extends Component {
    render() {
      return (
        <div>
          {RenderHeader && <Header />}
          <EntryPoint {...this.props} />
          {RenderFooter && <footer>Jag är en footer!</footer>}
        </div>
      );
    }
  };
}

export default EntryPoint;
