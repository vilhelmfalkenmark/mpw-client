import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import Header from "layout/Header";
import Footer from "layout/Footer";
import { Redirect } from "react-router";

import s from "./EntryPoint.css";

function EntryPoint({
  EntryPoint,
  renderHeader,
  renderFooter,
  pageRequiresAuthentication
}) {
  class EntryPointHoc extends Component {
    render() {
      const { authenticated, currentUser } = this.props;
      const redirectToLogin = !authenticated && pageRequiresAuthentication;
      return (
        <div className={s({ container: true })}>
          {redirectToLogin && <Redirect to="/login/" />}

          {renderHeader && (
            <Header currentUser={currentUser} authenticated={authenticated} />
          )}
          <EntryPoint {...this.props} />
          {renderFooter && <Footer />}
        </div>
      );
    }
  }
  return WithCss(EntryPointHoc, s);
}

export default EntryPoint;
