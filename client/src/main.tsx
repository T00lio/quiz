import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { UserProvider } from "./components/UserContext";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
// import App from "./App";
// import { UserProvider } from "./components/UserContext";

// const domain = import.meta.env.VITE_AUTH0_DOMAIN;
// const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Auth0Provider
//         domain="dev-2zrcct23kwxn7xt5.us.auth0.com"
//         clientId="mHIPL84ZqXPpf5Z6uheP6C2rohu5YJYA"
//         authorizationParams={{
//           // redirect_uri: window.location.origin,
//           redirect_uri: "http://localhost:3000/auth/oauth",
//         }}
//       >
//         <UserProvider>
//           <App />
//         </UserProvider>
//       </Auth0Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
// );
