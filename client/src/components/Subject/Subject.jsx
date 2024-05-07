import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "../../utils";
import { mockFetch } from "../../mock-backend";
import { SUBJECT_DESCRIPTIONS_MAP } from "./constants";

function Subject({ name, quizId }) {
  const navigate = useNavigate();
  const { data, mutate } = useMutation({
    mutateFn: () => mockFetch("/api/quiz/start", name),
  });

  useEffect(() => {
    if (data?.quizState?.id) navigate(`/quiz/${data.quizState.id}`);
  }, [data, navigate]);

  const handleClick = () => {
    if (quizId) {
      navigate(`/quiz/${quizId}`);
    } else {
      mutate();
    }
  };

  const { displayName, logo, backgroundColorLogo, description } =
    SUBJECT_DESCRIPTIONS_MAP[name];

  return (
    <div className="w-full lg:w-1/2 px-10 mb-10 lg:mb-20" onClick={handleClick}>
      <div
        style={{ cursor: "pointer" }}
        className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg"
      >
        <span
          className={`flex mb-10 justify-center items-center w-20 h-20 ${backgroundColorLogo} rounded-lg`}
        >
          <img src={logo} alt="react-logo" />
        </span>
        <h3 className="mt-12 mb-8 text-4xl font-bold text-white">
          {displayName}
        </h3>
        <p className="text-lg text-gray-200">{description}</p>
      </div>
    </div>
  );
}

export default Subject;
