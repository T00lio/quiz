import { createContext, useContext, useState, useEffect, ReactNode, FC } from "react";
import { useAuth0, User as UserAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

interface UserContextType {
  appUser: User | null;
  setAppUser: (user: any) => void;
  signUp: ({ email, password }: { email: string; password: string }) => void;
  signIn: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}
interface UserProviderProps {
  children: ReactNode;
}
interface User extends UserAuth0 {
  email: string;
  provider: "local" | "auth0";
  providerId: "local" | string | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [appUser, setAppUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user, isAuthenticated: isAuthenticatedAuth0, getAccessTokenSilently, logout: logoutAuth0 } = useAuth0();
  // let navigate = useNavigate();

  useEffect(() => {
    // const syncUser = async () => {
    //   if (isAuthenticatedAuth0 && user && user.email) {
    //     try {
    //       setIsLoading(true);
    //       const { id_token: accessTokenAuth0 } = await getAccessTokenSilently({ detailedResponse: true });
    //       const response = await fetch("http://localhost:3000/auth/oauth", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${accessTokenAuth0}`,
    //           credentials: "include",
    //         },
    //         body: JSON.stringify({
    //           email: user.email,
    //           provider: "auth0",
    //           providerId: user.sub,
    //         }),
    //       });

    //       if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //       } else {
    //         setAppUser({ email: user.email, provider: "auth0", providerId: user.sub });
    //       }
    //     } catch (error) {
    //       console.error("Error syncing with backend", error);
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   }
    // };

    // syncUser();
    if (isAuthenticatedAuth0 && user && user.email) {
      setAppUser({ email: user.email, provider: "auth0", providerId: user.sub });
    }
  }, [isAuthenticatedAuth0, user]);

  const signUp = async ({ email, password }: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setAppUser({ email, provider: "local", providerId: "local" });
      // navigate("/");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setAppUser({ email, provider: "local", providerId: "local" });
      // navigate("/");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    if (isAuthenticatedAuth0) {
      logoutAuth0({ logoutParams: { openUrl: false } });
    } else {
      try {
        await fetch("http://localhost:3000/auth/logout", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    setAppUser(null);
  };

  console.log(appUser);

  const isAuthenticated = isAuthenticatedAuth0 || !!appUser;

  return (
    <UserContext.Provider value={{ appUser, setAppUser, signUp, signIn, logout, isLoading, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAppUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAppUser must be used within a UserProvider");
  }
  return context;
};
