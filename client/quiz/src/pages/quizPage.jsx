import { useState, useEffect } from "react";

import logo from "/react.svg";
import axios from "axios";

function QuizPage() {
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [restultBG, setResultBG] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3004/api/questions");
      setQuestions(response.data);
    };
    fetchData();
  }, []);

  const handleClicked = (correct1, correct2, correct3, correct4) => {
    let isCorrect = false;
    if (correct1 === "TRUE") {
      isCorrect = true;
    }
    if (correct2 === "TRUE") {
      isCorrect = true;
    }
    if (correct3 === "TRUE") {
      isCorrect = true;
    }
    if (correct4 === "TRUE") {
      isCorrect = true;
    }
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setScore(score);
    }

    const newBackgroundColor = isCorrect ? "green" : "red";
    setResultBG(newBackgroundColor);
    setTimeout(() => {
      setResultBG("");
      const nextQuest = number + 1;
      if (nextQuest < questions.length) {
        setNumber(nextQuest);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const handleRestart = () => {
    setNumber(0);
    setScore(0);
    setShowResult(false);
  };

  const questionData = questions[number];

  return (
    <>
      <div className="App">
        <header className="Header">
          <h1
            style={{
              textAlign: "center",
              alignItems: "center",
              fontWeight: "900",
              justifyContent: "center",
              display: "flex",
              fontSize: "4rem",
            }}
          >
            100 React Question{" "}
            <img
              className="App-logo"
              src={logo}
              alt="react logo"
              style={{ width: "40px", height: "40px" }}
            ></img>
          </h1>
          <p className="text-black">
            This app will help you memorize the top 100 react interview
            questions
          </p>{" "}
        </header>

        <div>
          <h2 style={{ textAlign: "center" }}>Result</h2>
          <strong>
            You scored {score} out of {questions.length}
          </strong>
        </div>

        <section className="Question">
          {" "}
          <h1>{questionData?.question}</h1>
        </section>
        <div className="Result" style={{ backgroundColor: restultBG }}>
          {/* <h1>good job</h1> */}
        </div>
        <section className="Options">
          <button
            className="OptionButton"
            onClick={() => handleClicked(questionData?.correct1)}
          >
            {questionData?.option1}
          </button>
          <button
            className="OptionButton"
            onClick={() => handleClicked(questionData?.correct2)}
          >
            {questionData?.option2}
          </button>
          <button
            className="OptionButton"
            onClick={() => handleClicked(questionData?.correct3)}
          >
            {questionData?.option3}
          </button>
          <button
            className="OptionButton"
            onClick={() => handleClicked(questionData?.correct4)}
          >
            {questionData?.option4}
          </button>
        </section>
        <footer className="Footer">
          <div className="row">
            <div className="col">
              <h5 className="dashboard">
                Question: {number} of {questions.length}
              </h5>
              <h5 className="dashboard">Time: 10000</h5>
              <h5 className="dashboard">user</h5>
              Score: {score} out of: {questions?.length}
            </div>
            <h5 className="col" style={{ textAlign: "center" }}>
              <button className="button" onClick={handleRestart}>
                Click here to restart
              </button>

              {showResult}
            </h5>
          </div>
        </footer>
      </div>
    </>
  );
}
export default QuizPage;
