import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

let store;
export function configureStore() {
  //using createStore from redux
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
