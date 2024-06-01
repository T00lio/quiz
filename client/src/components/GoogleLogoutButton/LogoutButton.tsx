import { fetchFn, handleDefaultError, useMutation } from "../../utils";
import { useUser } from "../UserContext";

function LogoutButton() {
  const { setUser } = useUser();

  const { mutate: postAuthLogout } = useMutation({
    mutationFn: () =>
      fetchFn("/auth/logout", { method: "POST", credentials: "include" }),
    onError: handleDefaultError,
    onSuccess: () => setUser(null),
  });

  return (
    <div>
      <button
        onClick={() => postAuthLogout()}
        className="mb-3 py-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition duration-200"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
