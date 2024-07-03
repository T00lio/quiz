import { useNavigate } from "react-router-dom";
import { useUser } from "../components/UserContext";
import { fetchFn, handleDefaultError, useMutation } from "../utils";

export default function useLogout() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const { mutate: postAuthLogout } = useMutation({
    mutationFn: () =>
      fetchFn("/auth/logout", { method: "POST", credentials: "include" }),
    onError: handleDefaultError,
    onSuccess: () => {
      setUser(null);
      navigate("/");
      window.location.reload();
    },
  });

  return postAuthLogout;
}
