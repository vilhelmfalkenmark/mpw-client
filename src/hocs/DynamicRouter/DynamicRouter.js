import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";

import { GET_PAGE } from "schemas/page";

export function DynamicRouting({ DynamicPage, ApolloClient }) {
  class DynamicRouter extends Component {
    render() {
      console.log(this.props, " this.props");

      if (this.props.authenticated) {
        return <DynamicPage {...this.props} ApolloClient={ApolloClient} />;
      }

      return <p>Hej</p>;
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.user.authenticated,
    fetching: state.user.fetching,
    customerData: state.user.customerData
  });

  return connect(
    mapStateToProps,
    null
  )(
    graphql(GET_PAGE, {
      options: ownProps => ({
        variables: {
          path: "/"
        }
      })
    })(DynamicRouter)
  );
}

export default DynamicRouting;
