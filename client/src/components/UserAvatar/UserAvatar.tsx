import { MouseEventHandler, useEffect, useState } from "react";
import { useUser } from "../UserContext";
import useLogout from "../../hooks/useLogout";

export default function UserAvatr() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useUser();
  const logout = useLogout();

  useEffect(() => {
    setIsLoading(true);
    if (user && user.picture) {
      setAvatarUrl(user.picture);
    } else {
      setAvatarUrl("https://i.pravatar.cc/50");
    }
    setIsLoading(false);
  }, [user]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="grid grid-cols-1">
      <div className="border-8">
        <a href="/profile">
          <img src={avatarUrl || ""} alt="" className="rounded-full" />
        </a>
      </div>
      <footer>
        <a
          className="text-white font-thin text-xxs"
          onClick={logout as unknown as MouseEventHandler<HTMLAnchorElement>}
        >
          Logout
        </a>
      </footer>
    </div>
  );
}
