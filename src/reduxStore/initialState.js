const initialState = {
  user: {
    fetching: false,
    rejected: false,
    fulfilled: false,
    authenticated: false,
    customerData: {
      name: ""
    }
  }
};

export default initialState;
