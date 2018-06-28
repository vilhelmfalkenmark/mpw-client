import React, { Component } from "react";

class ErrorPage extends Component {
  render() {
    return (
      <main>
        {this.props.code === 404 && <div>Page not found</div>}
        {this.props.code === 500 && <div>Oups, something went wrong</div>}
      </main>
    );
  }
}

export default ErrorPage;
