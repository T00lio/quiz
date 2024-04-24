import React from "react";

function SuccessSection({
  score,
  handleRestart,
}: {
  score: number;
  handleRestart: () => void;
}) {
  return (
    <>
      <h1 className="text-5xl mb-2 leading-tight font-bold font-heading text-white">
        Congratulations!
      </h1>
      <h2 className="text-4xl mb-2 leading-tight font-bold font-heading text-white">
        You sucesfully completed the quiz, here are your results:
      </h2>
      <h3 className="text-4xl mt-2 mb-2 leading-tight font-bold font-heading text-white">
        You scored {score} out of 100.
      </h3>
      <div className="mt-32">
        <button
          onClick={handleRestart}
          className="mr-5 bg-red-500 rounded-full p-5 m-5"
        >
          Restart
        </button>
        <a href="/quizmenu" className="mr-5 bg-green-500 rounded-full p-5 m-5">
          Go to quiz menu
        </a>
      </div>
    </>
  );
}

export default SuccessSection;
