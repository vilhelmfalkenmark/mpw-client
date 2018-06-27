import {
  USER_FETCHING,
  USER_REJECTED,
  USER_FULFILLED
} from "reduxStore/actions/user";

export const INITIAL_STATE = {
  fetching: false,
  rejected: false,
  fulfilled: false,
  authenticated: false,
  currentUser: {}
};

const user = (state = INITIAL_STATE, action) => {
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
        authenticated: true,
        currentUser: { ...action.payload }
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
