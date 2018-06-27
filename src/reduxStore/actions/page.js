// ACTION TYPES
export const PAGE_FETCHING = "PAGE_FETCHING";
export const PAGE_FULFILLED = "PAGE_FULFILLED";
export const PAGE_REJECTED = "PAGE_REJECTED";

export const updatePage = pageData => ({
  type: PAGE_FULFILLED,
  pageData
});

export default "";
