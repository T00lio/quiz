interface SuccessSectionProps {
  score: number;
  handleRestart: () => void;
  numberOfQuestions: number;
}

const SuccessSection: React.FC<SuccessSectionProps> = ({
  score,
  handleRestart,
  numberOfQuestions,
}) => {
  return (
    <>
      <h1 className="text-5xl mb-2 leading-tight font-bold font-heading text-white">
        Congratulations!
      </h1>
      <h2 className="text-4xl mb-2 leading-tight font-bold font-heading text-white">
        You sucesfully completed the quiz, here are your results:
      </h2>
      <h3 className="text-4xl mt-2 mb-2 leading-tight font-bold font-heading text-white">
        You scored {score} out of {numberOfQuestions}.
      </h3>
      <div className="mt-32">
        <button
          onClick={handleRestart}
          className="mr-5 bg-red-500 rounded-full p-5 m-5"
        >
          Try again
        </button>
        <a href="/quizmenu" className="mr-5 bg-green-500 rounded-full p-5 m-5">
          Go to quiz menu
        </a>
      </div>
    </>
  );
};

export default SuccessSection;
