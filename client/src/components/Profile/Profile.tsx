import LogoutButton from "../GoogleLogoutButton/LogoutButton";
import { useUser } from "../UserContext";
import RecomendedLearning from "../../components/RecomendedLearning";
import ProfilePageQuizReport from "../../components/ProfilePageQuizReport";

function Profile() {
  const { user } = useUser();
  console.log(user);

  const randomUsername = () => {
    const randomUsernames = [
      "The Quizzer",
      "The Quiz Master",
      "The Quiz Wizard",
      "The Quiz Champion",
      "The Quiz King",
      "The Quiz Queen",
      "The Quiz Genius",
      "The Quiz Guru",
      "The Quiz Legend",
      "The Quiz Pro",
      "The Quiz Expert",
    ];
    const randomIndex = Math.floor(Math.random() * randomUsernames.length);
    return randomUsernames[randomIndex];
  };

  return user ? (
    <div>
      <>
        <div className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden ">
          <img
            className="hidden lg:block absolute top-0 left-0 -ml-96 -mt-40"
            src="zospace-assets/lines/circle.svg"
            alt=""
          />
          <img
            className="hidden lg:block absolute bottom-0 right-0 -mr-32 -mb-72"
            src="zospace-assets/lines/circle.svg"
            alt=""
          />
          <div className="relative container px-4 mx-auto">
            <h1 className="text-6xl font-bold text-white">
              Welcome back, {randomUsername()}!
            </h1>
            <h3 className="mt-12 mb-8 text-4xl font-bold text-white">
              Dashboard
            </h3>

            <div className="w-full  px-10 mb-10 lg:mb-20 bg-gray-600 rounded-lg p-5">
              <p className="text-white">Name: Tulio Salvatierra</p>
              <p className="text-white">Email: {user.email}</p>

              <ProfilePageQuizReport />
            </div>
            <h3 className="mt-12 mb-8 text-4xl font-bold text-white">
              Recomended Learning
            </h3>
            <div className="w-full px-10 mb-10 lg:mb-20 bg-gray-600 rounded-lg p-5">
              <RecomendedLearning />
            </div>
            <h3 className="mt-12 mb-8 text-4xl font-bold text-white">
              Settings
            </h3>
            <div className="w-full px-10 mb-10 lg:mb-20 bg-gray-600 rounded-lg p-5">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-9 px-4 py-4 text-white ">
                <a href="#">
                  <p>Change password</p>
                </a>
                <a href="#">
                  <p>Change email</p>
                </a>
                <a href="#">
                  <p>Change username</p>
                </a>
                <a href="#">
                  <p>Change avatar</p>
                </a>
              </div>
            </div>
            <h3 className="mt-12 mb-8 text-4xl font-bold text-white">Logout</h3>
            <div className="w-full px-10 mb-10 lg:mb-20 bg-gray-600 rounded-lg">
              <div className="grid grid-cols-1 gap-9 px-4 py-4  ">
                <div className="w-32 h-32 rounded-xl flex-row">
                  <LogoutButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Profile;
