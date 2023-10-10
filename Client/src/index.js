import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Auth0Provider } from "@auth0/auth0-react";
const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENTID } = process.env;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-rcyibz4rmsr34pyn.us.auth0.com"
      clientId="zl11pMVv1Jdr17hvs89S0ISRNTi8p6sz"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);

