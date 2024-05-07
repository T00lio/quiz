import OptionButton from "../OptionButton";

function Quiz({ subject, score, questionIndex, questionName, options, totals, updateQuiz }) {
  const handleOptionSelection = (isCorrect) => {
    updateQuiz({ operation: "answer", isCorrect });
  };

  const handleRestart = () => {
    updateQuiz({ operation: "restart" });
  };

  const handleSkip = () => {
    updateQuiz({ operation: "skip" });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4" />

      <h3 className="mt-12 mb-8 ml-auto text-4xl font-bold text-white w-50">Welcome to the {subject} Quiz</h3>
      <div className="flex justify-between">
        <h3 className="text-2xl mr-auto text-white mb-10 mt-10 font-bold w-1/2">
          Question {questionIndex}: {questionName}
        </h3>
        <div className="w-1/4 ml-auto bg-white rounded-xl p-4">
          <p className="w-25 ml-auto mr-auto mt-5">{`Score ${score} / ${totals}`}</p>
          <h3 className="w-25 ml-auto mr-auto mt-5">
            Progress {questionIndex} / {totals}
          </h3>
        </div>
      </div>
      <div className="grid-rows-4 flex flex-col mt-10 bg-gray-600 p-5 rounded-lg">
        <div className="option-container mt-5 ">
          {options.map(({ name, isCorrect }, index) => (
            <OptionButton
              key={`${name}${index}`}
              label={name}
              isCorrect={isCorrect}
              onOptionSelected={handleOptionSelection}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <button onClick={handleRestart} className="mr-5 bg-red-500 rounded-full p-5">
          Restart
        </button>
        <button onClick={handleSkip} className="mr-5 rounded-full p-5 bg-white">
          skip question
        </button>
      </div>
    </>
  );
}

export default Quiz;
