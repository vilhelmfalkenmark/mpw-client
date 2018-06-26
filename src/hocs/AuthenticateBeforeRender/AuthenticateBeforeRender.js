import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";

import {
  setTokenCookie,
  getTokenCookie,
  deleteTokenCookie
} from "utils/helpers/cookies";

import { Query } from "react-apollo";

import { GET_USER_INFO } from "schemas/user";

import { userFulfilled } from "reduxStore/actions/user";

export function AuthenticateBeforeRender({
  EntryPoint,
  RequiresAuthentication,
  ApolloClient
}) {
  class AuthenticationBeforeRender extends Component {
    constructor() {
      super();
      this.state = {
        authenticated: false
      };

      this.tokenCookie = getTokenCookie();
      this.userIsAuthenticated = this.userIsAuthenticated.bind(this);
    }

    userIsAuthenticated() {
      this.setState({
        authenticated: true
      });
    }

    componentDidUpdate(prevProps) {}

    render() {
      const { authenticated } = this.state;

      console.log(this.props, " this.props");

      if (authenticated) {
        return <EntryPoint {...this.props} ApolloClient={ApolloClient} />;
      }

      return <p>Hej</p>;

      // if (this.props.authenticated) {
      //   return <EntryPoint {...this.props} ApolloClient={ApolloClient} />;
      // } else if (this.props.fetching) {
      //   <p>Laddar</p>;
      // } else if (!this.tokenCookie && RequiresAuthentication) {
      //   return <p>Du behöver logga in</p>;
      // }

      // return <EntryPoint {...this.props} />;
      // <Mutation mutation={POST_AUTHENTICATION}>
      //
      // </Mutation>
      // return <EntryPoint {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.user.authenticated,
    fetching: state.user.fetching,
    customerData: state.user.customerData
  });

  const mapDispatchToProps = dispatch => ({
    userFulfilled: customerData => {
      dispatch(userFulfilled(customerData));
    }
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    graphql(GET_USER_INFO, {
      options: ownProps => ({
        variables: {
          token: "hello"
        }
      }),
      skip: ownProps => ownProps.authenticated
    })(AuthenticationBeforeRender)
  );

  // return connect(
  //   mapStateToProps,
  //   mapDispatchToProps
  // )(AuthenticationBeforeRender);
}

export default AuthenticateBeforeRender;
