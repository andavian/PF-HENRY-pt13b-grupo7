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
// const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENTID } = process.env;

import axios from "axios";


//axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://server-henry-shop.onrender.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-orpbhzhtmugpavo5.us.auth0.com"
      clientId="PZisiBC1hTF8zg2B4Lf2QNOlAwNAdHDW"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/profile",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);
