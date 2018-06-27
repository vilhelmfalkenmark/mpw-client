import initialState from "reduxStore/initialState";

import {
  PAGE_FETCHING,
  PAGE_REJECTED,
  PAGE_FULFILLED
} from "reduxStore/actions/page";

const page = (state = initialState.page, action) => {
  switch (action.type) {
    case PAGE_FETCHING: {
      return Object.assign({}, state, {
        fetching: true
      });
    }
    case PAGE_FULFILLED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        rejected: false,
        pageData: action.pageData
      });
    }
    case PAGE_REJECTED: {
      return Object.assign({}, state, {
        fulfilled: false,
        fetching: false,
        rejected: true
      });
    }
    default:
      return state;
  }
};

export default page;
