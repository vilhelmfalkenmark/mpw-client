import {
  LOG_IN_USER,
  LOG_OUT_USER,
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
    case LOG_IN_USER: {
      return Object.assign({}, state, {
        authenticated: true,
        currentUser: { ...action.payload }
      });
    }
    case LOG_OUT_USER: {
      return Object.assign({}, INITIAL_STATE);
    }
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
