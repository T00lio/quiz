import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function GoogleButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button
        type="button"
        onClick={() => loginWithRedirect()}
        className="mb-3 py-4 w-full bg-black hover:bg-gray-200 text-white font-bold rounded-full transition duration-200"
      >
        <FontAwesomeIcon icon={faGithub} /> Github
      </button>
    </div>
  );
}

export default GoogleButton;
