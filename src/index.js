import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { getAllSpecialities } from "./redux/actionsCreator";
import store from "./redux/store";
import "./styles/styles.scss";

store.dispatch(getAllSpecialities());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
