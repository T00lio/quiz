import { useState, useEffect } from "react";
import reactQuestions from "./api/reactQuestions";
import logo from "/react.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await reactQuestions.get("/");
        setQuestions(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleClicked = () => {
    if (questions[number].option1 === true) {
      setScore(score);
      alert("incorrect! 👎🏻");
    }
    if (questions[number].option2 === true) {
      setScore(score);
      alert("incorrect! 👎🏻");
    }
    if (questions[number].option3 === true) {
      setScore(score);
      alert("incorrect! 👎🏻");
    }
    if (questions[number].option4 === true) {
      setScore(score);
      alert("incorrect! 👎🏻");
    } else {
      setScore(score + 1);
      alert("correct! 🙌");
    }

    const nextQuest = number + 1;
    if (nextQuest < questions.length) {
      setNumber(nextQuest);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setNumber(0);
    setScore(0);
    setShowResult(false);
  };

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
          <p
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "200",
            }}
          >
            This app will help you memorize the top 100 react interview
            questions
          </p>{" "}
        </header>
        {showResult === true ? (
          <div>
            <h2 style={{ textAlign: "center" }}>Result</h2>
            <strong>
              You scored {score} out of {questions.length}
            </strong>
          </div>
        ) : null}
        <section className="Question">
          {" "}
          <h1>{questions[number].question_text}</h1>
        </section>
        <section className="Options">
          <button onClick={() => handleClicked(false)}>
            {questions[number].option1}
          </button>
          <button className="OptionButton" onClick={() => handleClicked(false)}>
            {questions[number].option2}
          </button>
          <button className="OptionButton" onClick={() => handleClicked(false)}>
            {questions[number].option3}
          </button>
          <button className="OptionButton" onClick={() => handleClicked(false)}>
            {questions[number].option4}
          </button>
        </section>
        <footer className="Footer">
          <div className="row">
            <div className="col">
              <h5 className="dashboard">
                Question: {questions[number].question_id}
              </h5>
              <h5 className="dashboard">Time: 10000</h5>
              <h5 className="dashboard">user</h5>
              Score: {score} out of: {questions.length}
            </div>
            <h5 className="col">
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
export default App;
