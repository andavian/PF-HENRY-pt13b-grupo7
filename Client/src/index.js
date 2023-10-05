import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Auth0Provider} from "@auth0/auth0-react"
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENTID

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider>
  <Provider store={store}>
  <BrowserRouter domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <App />
  </BrowserRouter>
    </Provider>
    </Auth0Provider>
);
