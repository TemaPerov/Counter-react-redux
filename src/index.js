import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./Redux/rootReduser";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
// window.store = store;
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
