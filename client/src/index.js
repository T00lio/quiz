import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "../src/Context/authContext";

const container = document.getElementById("root");
const root = createRoot(container);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: "http://localhost:3000" }} // Fix: Assign redirect_uri property using correct syntax
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
