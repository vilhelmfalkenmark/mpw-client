import React, { Component } from "react";
import { connect } from "react-redux";
import { logOutUser } from "reduxStore/actions/user";
import { deleteTokenCookie } from "utils/helpers/cookies";

import WithCss from "hocs/styles/WithCss";
import s from "./MyDetails.css";

class MyDetails extends Component {
  _handleLogOut = () => {
    deleteTokenCookie();
    this.props.logOutUser();
  };

  render() {
    return (
      <main className={s({ container: true })}>
        <h1>Mina uppgifter</h1>
        <button onClick={this._handleLogOut}>Logga ut!</button>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => {
    dispatch(logOutUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithCss(MyDetails, s));
