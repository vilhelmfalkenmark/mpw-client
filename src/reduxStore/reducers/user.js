import initialState from "reduxStore/initialState";

import {
  USER_FETCHING,
  USER_REJECTED,
  USER_FULFILLED
} from "reduxStore/actions/user";

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case USER_FETCHING: {
      return Object.assign({}, state, {
        fetching: true
      });
    }
    case USER_FULFILLED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        rejected: false,
        customerData: action.customerData
      });
    }
    case USER_REJECTED: {
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

export default user;
