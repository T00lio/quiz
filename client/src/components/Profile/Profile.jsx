import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Profile</h1>
          <h1>{user.name}</h1>
          <img src={user.picture} alt={user.name} />
          <p>{user.email}</p>

          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      ) : (
        <>
          <h1>Profile</h1>
          <h1>Not logged in</h1>
        </>
      )}
    </div>
  );
}

export default Profile;
