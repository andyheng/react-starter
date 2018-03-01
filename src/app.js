// React
import React from "react";
import ReactDOM from "react-dom";
import Starter from "./component/Starter";
// Style
import "normalize.css/normalize.css";
import "./style/style.scss";
// Redux
import { Provider } from "react-redux";
import configStore from "./component/redux/store/configStore";

// initialize redux store
const store = configStore();
// provide to app
const provideReduxStoreToApp = (
  <Provider store={store}>
    <Starter />
  </Provider>
)

ReactDOM.render(
  provideReduxStoreToApp,
  document.querySelector("#root")
)