import initialState from "reduxStore/initialState";

import {
  AUTHENTICATION_FETCHING,
  AUTHENTICATION_REJECTED,
  AUTHENTICATION_FULFILLED
} from "reduxStore/actions/authentication";

const authentication = (state = initialState.authentication, action) => {
  switch (action.type) {
    case AUTHENTICATION_FETCHING: {
      return Object.assign({}, state, {
        fetching: true
      });
    }
    case AUTHENTICATION_FULFILLED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        rejected: false,
        data: action.payload.data
      });
    }
    case AUTHENTICATION_REJECTED: {
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

export default authentication;
