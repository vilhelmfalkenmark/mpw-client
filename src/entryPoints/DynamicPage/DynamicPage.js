import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";

import { GET_PAGE } from "schemas/page";

import { updatePage } from "reduxStore/actions/page";

class DynamicPage extends Component {
  render() {
    console.log(this.props);
    return (
      <main>
        <h1>DynamicPage route</h1>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.page.fetching,
  rejected: state.page.rejected,
  fulfilled: state.page.fulfilled
});

const mapDispatchToProps = dispatch => ({
  updatePage: pageData => {
    dispatch(updatePage(pageData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  graphql(GET_PAGE, {
    options: ownProps => ({
      variables: {
        path: "/"
      }
    }),
    skip: true
  })(DynamicPage)
);
