import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "reduxStore/reducers/rootReducer";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = applyMiddleware(promise(), thunk);
let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, devTools, middleware);
} else {
  store = createStore(rootReducer, middleware);
}

export default store;
