import React from "react";
import "./ResultSection.css";

function ResultSection({ score, questions }) {
  return (
    <section className="quizSection">
      <h1 className="Result">Congratulations!</h1>
      <h3 className="Result">You successfully completed this quiz</h3>

      <h1 className="Result">
        Your Score is <bold>{score}</bold> out of{" "}
        <bold>{questions.length}</bold>
      </h1>
      <h3 className="Result">Thank you for taking the quiz!</h3>
    </section>
  );
}

export default ResultSection;
