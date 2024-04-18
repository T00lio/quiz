import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setUserInfo(user);
      console.log(user);
    }
  }, [isAuthenticated, user]);

  return (
    <AuthContext.Provider
      value={{ userInfo, isAuthenticated, isLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
