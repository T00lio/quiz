import PropTypes from "prop-types";

function Footer({ number, questions, score, handleRestart }) {
  console.log(handleRestart);
  return (
    <footer className="Footer">
      <div className="row">
        <div className="col">
          <h5 className="dashboard">
            Progress: Question {questions[number]?.id} of {questions.length}
          </h5>
          Score: {score} out of: {questions?.length}
        </div>
        <h5 className="col" style={{ textAlign: "center" }}>
          <button className="restart-button" onClick={handleRestart}>
            Click here to restart
          </button>
        </h5>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  number: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  handleRestart: PropTypes.func.isRequired,
};

export default Footer;
