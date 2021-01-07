import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { configureStore } from "./store/index";
import { Provider } from "react-redux";

//importing configureStore() from store folder
const store = configureStore();
console.log("store", store);
console.log("store", store.getState());

ReactDOM.render(
  //passing store as a props
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
