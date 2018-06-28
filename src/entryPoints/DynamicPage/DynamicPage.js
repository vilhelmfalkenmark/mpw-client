import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import { GET_PAGE } from "schemas/page";
import { updatePage, rejectePage } from "reduxStore/actions/page";

import ConfigurablePage from "./components/ConfigurablePage";

class DynamicPage extends Component {
  static getDerivedStateFromProps(props) {
    if (props.data) {
      if (
        props.data.loading === false &&
        props.data.page &&
        !props.data.error
      ) {
        props.updatePage(props.data.page);
      } else if (props.data.error) {
        props.rejectePage();
      }
    }

    return null;
  }

  render() {
    console.log(this.props);

    return (
      <main>
        {this.props.fulfilled && <ConfigurablePage page={this.props.page} />}
        {this.props.rejected && <div>Page not found</div>}
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
  },
  rejectePage: () => {
    dispatch(rejectePage());
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
