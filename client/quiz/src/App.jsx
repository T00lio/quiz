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

  const handleClicked = (isTrue) => {
    if (isTrue === false) {
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
        <div className="Question">
          {" "}
          <h1>{questions[number].question_text}</h1>
        </div>
        <div className="Footer">
          <div className="row">
            <h5 className="dashboard">
              Score: {score} out of: {questions.length}
            </h5>
            <h5 className="dashboard">Question: {questions.question_id}</h5>
            <h5 className="dashboard">Time: 10000</h5>
            <h5 className="dashboard">user</h5>
          </div>
          <button onClick={handleRestart}>Click here to restart</button>
          <button onClick={() => handleClicked(true)}>True</button>
          {showResult}
        </div>
      </div>
    </>
  );
}
export default App;
