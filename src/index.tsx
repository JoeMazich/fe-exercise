import React from "react";
import ReactDOM from "react-dom/client";
import "./styleSheet.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/configStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
