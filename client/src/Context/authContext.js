import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (isAuthenticated && !userInfo) {
      // Fetch user info from DB
      setUserInfo(user);
    } else if (!isAuthenticated && userInfo) {
      setUserInfo(null);
    }
  }, [isAuthenticated, userInfo, user]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        login: loginWithRedirect,
        logout,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallback = ({ appState }) => {
    window.history.replaceState(
      {},
      appState?.returnTo || window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
