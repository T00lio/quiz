import LogoutButton from "../GoogleLogoutButton/LogoutButton";
import { useUser } from "../UserContext";

function Profile() {
  const { user } = useUser();

  return user ? (
    <div>
      <>
        <h1>Profile</h1>
        <h1>{user.name}</h1>
        <img src={user.picture} alt={user.name} />
        <p>{user.email}</p>
        <LogoutButton />

        <div>{JSON.stringify(user, null, 2)}</div>
      </>
    </div>
  ) : null;
}

export default Profile;
