// ACTION TYPES
export const USER_FETCHING = "USER_FETCHING";
export const USER_FULFILLED = "USER_FULFILLED";
export const USER_REJECTED = "USER_REJECTED";

export const userFulfilled = userData => ({
  type: USER_FULFILLED,
  userData
});

export default "";
