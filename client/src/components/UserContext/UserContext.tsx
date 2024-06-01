import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import { fetchFn, useMutation } from "../../utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserContextType {
  user: User | null;
  setUser: (user: any) => void;
  isFetched: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
}
interface UserProviderProps {
  children: ReactNode;
}

export interface User {
  email: string;
  name: string;
  picture: string | null;
}

export interface ApiResponse<T = void> {
  message: string;
  data?: T;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  const { mutate: getUserData, isLoading } = useMutation({
    mutationFn: (): Promise<User> =>
      fetchFn("/auth/user", { credentials: "include" }),
    onSuccess: (data) => {
      setUser(data);
      setIsFetched(true);
      console.log(data);
    },
  });

  useEffect(() => {
    getUserData();
  }, []);

  const isAuthenticated = !!user;

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isFetched,
        isLoading,
        isAuthenticated,
      }}
    >
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
