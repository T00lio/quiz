import "./ResultSection.css";
import PropTypes from "prop-types";

function ResultSection({ score, questions, handleRestart }) {
  return (
    <section className="result">
      <h1 className="Result">Congratulations!</h1>
      <h3 className="Result">You successfully completed this quiz</h3>

      <h1 className="Result">
        Your Score is <bold>{score}</bold> out of <bold>{questions}</bold>
      </h1>
      <h3 className="Result">Thank you for taking the quiz!</h3>
      <button className="Result" onClick={handleRestart}>
        Restart
      </button>
    </section>
  );
}

export default ResultSection;

PropTypes.ResultSection = {
  score: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  handleRestart: PropTypes.func.isRequired,
};
