import { useAppUser } from "../UserContext";

function LogoutButton() {
  const { logout } = useAppUser();

  return (
    <div>
      <button
        onClick={() => logout()}
        className="mb-3 py-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition duration-200"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
