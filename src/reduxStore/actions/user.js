// ACTION TYPES
export const USER_FETCHING = "USER_FETCHING";
export const USER_FULFILLED = "USER_FULFILLED";
export const USER_REJECTED = "USER_REJECTED";
export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";

export const userFulfilled = currentUser => ({
  type: USER_FULFILLED,
  payload: currentUser
});

export const logInUser = currentUser => ({
  type: LOG_IN_USER,
  payload: currentUser
});

export const logOutUser = () => ({
  type: LOG_OUT_USER
});

export default "";
