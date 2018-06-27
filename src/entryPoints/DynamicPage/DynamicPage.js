import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";

import { GET_PAGE } from "schemas/page";

import { updatePage } from "reduxStore/actions/page";
import WithCss from "hocs/styles/WithCss";
import { setTokenCookie, deleteTokenCookie } from "utils/helpers/cookies";

import s from "./DynamicPage.css";

class DynamicPage extends Component {
  constructor() {
    super();

    this.handleSetTokenCookie = this.handleSetTokenCookie.bind(this);
    this.handleDeleteTokenCookie = this.handleDeleteTokenCookie.bind(this);
  }

  handleSetTokenCookie() {
    setTokenCookie({
      token: "abc123"
    });
  }

  handleDeleteTokenCookie() {
    deleteTokenCookie();
  }

  static getDerivedStateFromProps(props) {
    if (props.data) {
      if (props.data.loading === false && props.data.page) {
        props.updatePage(props.data.page);
      }
    }

    return null;
  }

  render() {
    console.log(this.props);
    // const { currentUser, authenticated } = this.props;

    return (
      <main>
        {this.props.fulfilled ? (
          <h1>{this.props.page.fields.title}</h1>
        ) : (
          <h1> DynamicPage route</h1>
        )}
        <button onClick={this.handleSetTokenCookie}>
          {" "}
          Sätt en token kaka{" "}
        </button>{" "}
        <button onClick={this.handleDeleteTokenCookie}>
          Radera en token kaka{" "}
        </button>{" "}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.page.fetching,
  rejected: state.page.rejected,
  fulfilled: state.page.fulfilled,
  page: state.page.pageData
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
        path: ownProps.location.pathname
      }
    }),
    skip: false
  })(DynamicPage)
);
