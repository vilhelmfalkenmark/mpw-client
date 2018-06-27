import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";

import { GET_USER_INFO } from "schemas/user";

import { userFulfilled } from "reduxStore/actions/user";

export function AuthenticateBeforeRender({
  EntryPoint
  // pageRequiresAuthentication
}) {
  class AuthenticationBeforeRender extends Component {
    static getDerivedStateFromProps(props) {
      if (props.data) {
        if (
          props.data.loading === false &&
          props.data.currentUser &&
          props.authenticated === false
        ) {
          props.userFulfilled(props.data.currentUser);
        }
      }

      return null;
    }

    constructor() {
      super();
      this.state = {
        test: null
      };
    }

    render() {
      console.log("this.props");

      if (this.props.authenticated) {
        return <EntryPoint {...this.props} />;
      } else {
        return <EntryPoint {...this.props} />;
      }
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.user.authenticated,
    fetching: state.user.fetching,
    currentUser: state.user.currentUser
  });

  const mapDispatchToProps = dispatch => ({
    userFulfilled: currentUser => {
      dispatch(userFulfilled(currentUser));
    }
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    graphql(GET_USER_INFO, {
      skip: ownProps => ownProps.authenticated
    })(AuthenticationBeforeRender)
  );
}

export default AuthenticateBeforeRender;
