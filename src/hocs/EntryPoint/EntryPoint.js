import React, { Component } from "react";
import Header from "layout/Header";

function EntryPoint({ EntryPoint, renderHeader, renderFooter }) {
  return class extends Component {
    render() {
      return (
        <div>
          {renderHeader && (
            <Header
              currentUser={this.props.currentUser}
              authenticated={this.props.authenticated}
            />
          )}
          <EntryPoint {...this.props} />
          {renderFooter && <footer>Jag är en footer!</footer>}
        </div>
      );
    }
  };
}

export default EntryPoint;
