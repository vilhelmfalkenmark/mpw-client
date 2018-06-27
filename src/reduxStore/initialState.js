const initialState = {
  user: {
    fetching: false,
    rejected: false,
    fulfilled: false,
    authenticated: true,
    customerData: {
      name: ""
    }
  },
  page: {
    fetching: false,
    rejected: false,
    fulfilled: false,
    pageData: {}
  }
};

export default initialState;
