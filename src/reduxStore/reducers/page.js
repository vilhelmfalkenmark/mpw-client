import {
  PAGE_FETCHING,
  PAGE_REJECTED,
  PAGE_FULFILLED
} from "reduxStore/actions/page";

export const INITIAL_STATE = {
  fetching: false,
  rejected: false,
  fulfilled: false,
  pageData: {}
};

const page = (state = INITIAL_STATE, action) => {
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
