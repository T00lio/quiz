import "./QuizSection.css";
import PropTypes from "prop-types";

function QuizSection({ handleClicked, buttonBG, currentQuestion }) {
  console.log(currentQuestion);
  return (
    <>
      <section className="quizSection">
        {/*************** question text ****************/}
        <h1 className="current-Question">
          {currentQuestion.id}.{currentQuestion.question}
        </h1>

        {/*************** option buttons ****************/}
        {[1, 2, 3, 4].map((optionIndex) => (
          <button
            className="OptionButton"
            key={optionIndex}
            onClick={() => handleClicked(optionIndex)}
            style={{ backgroundColor: buttonBG[`button${optionIndex}`] }}
          >
            {currentQuestion[`option${optionIndex}`]}
          </button>
        ))}
      </section>
    </>
  );
}

QuizSection.propTypes = {
  questions: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired,
  handleClicked: PropTypes.func.isRequired,
  buttonBG: PropTypes.object.isRequired,
  currentQuestion: PropTypes.object.isRequired,
};

export default QuizSection;
