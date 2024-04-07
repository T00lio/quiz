import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../GoogleLogoutButton/LogoutButton";

function Profile() {
  const { user } = useAuth0();

  return user ? (
    <section className="h-full py-20 max-w-screen-lg bg-gray-800">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold text-center mt-12 mb-12 max-w-lg">
          Welcome, {user.nickname || user.email}!
        </h1>
      </div>
      <div className="w-full max-w-4xl space-y-6 ml-auto mr-auto mt-12 mb-12">
        <div className="p-4 rounded-lg bg-gray-400 mb-10">
          <div className="flex items-center space-x-4">
            <img
              alt="Avatar"
              className="rounded-full"
              height="96"
              src={user.picture}
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <div className="ml-10">
              <h1 className="text-2xl text-white font-bold">{user.name}</h1>
              <p className="text-white">{user.nickname || user.email}</p>
            </div>
            <div className="ml-auto">
              <LogoutButton />
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg  bg-gray-400 mb-10">
            <h2 className="text-xl font-bold mb-8 text-white">
              Quiz Statistics
            </h2>
            <div className="grid grid-cols-2 gap-1 text-sm bg-gray-400">
              <h2 className="text-white text-xl">React</h2>
              <h2 className="text-xl text-white">23</h2>
              <h2 className="text-white text-xl">CSS</h2>
              <h2 className="text-xl text-white">78%</h2>
              <h2 className="text-white text-xl">HTML</h2>
              <h2 className="text-xl text-white">100%</h2>
              <h2 className="text-white text-xl">Javascript</h2>
              <h2 className="text-xl text-white">100%</h2>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-gray-400">
            <h2 className="text-xl font-bold mb-8 text-white">
              Study Resources
            </h2>
            <div className="grid grid-cols-3 gap-4 items-start">
              <div>
                <img
                  alt="Badge"
                  className="aspect-square object-cover rounded-lg"
                  height="100"
                  src="/placeholder.svg"
                  width="100"
                />
                <div className="text-center text-white">Quiz Master</div>
              </div>
              <div>
                <img
                  alt="Badge"
                  className="aspect-square object-cover rounded-lg border"
                  height="100"
                  src="/placeholder.svg"
                  width="100"
                />
                <div className="text-center text-white">Trivia Whiz</div>
              </div>
              <div>
                <img
                  alt="Badge"
                  className="aspect-square object-cover rounded-lg border"
                  height="100"
                  src="/placeholder.svg"
                  width="100"
                />
                <div className="text-center text-white">Brainiac</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
}

export default Profile;
