import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function GoogleButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button
        type="button"
        onClick={() => loginWithRedirect()}
        className="mb-3 py-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition duration-200"
      >
        <FontAwesomeIcon icon={faGoogle} /> Google
      </button>
    </div>
  );
}

export default GoogleButton;
