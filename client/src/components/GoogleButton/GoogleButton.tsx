// import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const googleClientId = import.meta.env.VITE_OAUTH_GOOGLE_CLIENT_ID;

function GoogleButton() {
  // const { loginWithRedirect } = useAuth0();

  const handleClick = () => {
    const googleAuth = google.accounts.oauth2.initCodeClient({
      client_id: googleClientId,
      scope: "openid profile email",
      ux_mode: "redirect",
      redirect_uri: "http://localhost:3000/auth/google/callback",
    });
    googleAuth.requestCode();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="mb-3 py-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition duration-200"
      >
        <FontAwesomeIcon icon={faGoogle} /> Google
      </button>
    </div>
  );
}

export default GoogleButton;
