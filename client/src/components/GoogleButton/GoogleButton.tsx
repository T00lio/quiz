import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const API_URL = import.meta.env.VITE_API_URL;

function GoogleButton() {
  const handleClick = () => {
    window.location.href = `${API_URL}/auth/google`;
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
