import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";
import Header from "layout/Header";
import Footer from "layout/Footer";

import s from "./EntryPoint.css";

function EntryPoint({ EntryPoint, renderHeader, renderFooter }) {
  class EntryPointHoc extends Component {
    render() {
      return (
        <div className={s({ container: true })}>
          {renderHeader && (
            <Header
              currentUser={this.props.currentUser}
              authenticated={this.props.authenticated}
            />
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
