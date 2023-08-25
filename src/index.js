import React from "react";
import ReactDOM  from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import "./assets/css/styles.css";
import App from "./App";
import "./assets/fontawesome-free-6.4.0-web/css/all.min.css";
import { store } from "./store";
import { Provider } from "react-redux"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)