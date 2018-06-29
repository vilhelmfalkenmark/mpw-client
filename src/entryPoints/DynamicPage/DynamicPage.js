import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import { GET_PAGE } from "schemas/page";
import { updatePage, rejectePage } from "reduxStore/actions/page";
import ErrorPage from "components/ErrorPage";
import { cleanRoute } from "utils/helpers/page";

import { getHTTPErrorCode } from "utils/selectors/contentful";
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

    const renderErrorPage = () => {
      const codeIs404 = getHTTPErrorCode(this.props);

      if (codeIs404) {
        return <ErrorPage code={404} />;
      } else {
        return <ErrorPage code={500} />;
      }
    };

    return (
      <main>
        {this.props.fulfilled && <ConfigurablePage page={this.props.page} />}
        {this.props.rejected && renderErrorPage()}
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
        path: cleanRoute(ownProps.location.pathname)
      }
    }),
    skip: false
  })(DynamicPage)
);
