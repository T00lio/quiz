import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GITHUB_CALLBACK_URL;

function GithubButton() {
  console.log("clientId", clientId);
  console.log("redirectUri", redirectUri);
  const handleClick = () => {
    window.location.href = `${import.meta.env.VITE_GITHUB_CALLBACK_URL}`;
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="mb-3 py-4 w-full bg-black hover:bg-gray-200 text-white font-bold rounded-full transition duration-200"
      >
        <FontAwesomeIcon icon={faGithub} /> Github
      </button>
    </div>
  );
}

export default GithubButton;
