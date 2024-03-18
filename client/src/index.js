import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("root");
const root = createRoot(container);

console.log(
  process.env.REACT_APP_AUTH0_DOMAIN,
  process.env.REACT_APP_AUTH0_CLIENT_ID
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-xsprfm0r7v15ra6k.us.auth0.com"
        clientId="bTVAi9Sxt91he1kb3d9DvH2d506X5Ce5"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
