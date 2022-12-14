import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import reduxThunk from "redux-thunk";
import Reducer from "./_reducers";
import { CookiesProvider } from "react-cookie";
// import "bootstrap/dist/css/bootstrap.min.css";

const createStoreWidthMiddleware = applyMiddleware(
  promiseMiddleware,
  reduxThunk
)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));

//<React.StrictMode> = twice rendering issue
root.render(
  // <React.StrictMode>
  <CookiesProvider>
    <BrowserRouter>
      <Provider
        store={createStoreWidthMiddleware(
          Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <App />
      </Provider>
    </BrowserRouter>
  </CookiesProvider>
  // {/* </React.StrictMode> */}
);
