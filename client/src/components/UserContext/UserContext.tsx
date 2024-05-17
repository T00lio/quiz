import { createContext, useContext, useState, useEffect, ReactNode, FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

interface UserContextType {
  appUser: any; // Define la estructura de appUser según tu modelo
  updateUser: (user: any) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [appUser, setAppUser] = useState<any>(null);

  const updateUser = (user: any) => {
    setAppUser(user);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated && user && user.sub) {
        try {
          const token = await getAccessTokenSilently();
          const response = await axios.post(
            "http://localhost:3000/auth/oauth",
            {
              email: user.email,
              provider: user.sub.split("|")[0],
              providerId: user.sub.split("|")[1],
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          updateUser(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated, user, getAccessTokenSilently]);

  return <UserContext.Provider value={{ appUser, updateUser }}>{children}</UserContext.Provider>;
};

export const useAppUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAppUser must be used within a UserProvider");
  }
  return context;
};
