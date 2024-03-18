import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function GoogleButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button
        onClick={() => loginWithRedirect()}
        className="mb-3 py-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition duration-200"
      >
        Google
      </button>
    </div>
  );
}

export default GoogleButton;
