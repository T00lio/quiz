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
        console.log(response.data.data);
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
      <header>
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
      </header>
      <p style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "200" }}>
        This app will help you memorize the top 100 react interview questions
      </p>
      <div className="question">
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <h2 style={{ fontSize: "2rem" }}>
                <ul style={{ listStyle: "none" }}>
                  <li key={question.question_id} className="row">
                    <div className="col">
                      {question.question_id}.{question.question_text}
                    </div>
                    <div className="col">
                      <button className="optionButton" onClick={handleClicked}>
                        {question.option1}
                      </button>
                      <button className="optionButton" onClick={handleClicked}>
                        {question.option3}
                      </button>
                      <button className="optionButton" onClick={handleClicked}>
                        {question.option4}
                      </button>
                      <button className="optionButton" onClick={handleClicked}>
                        {question.option2}
                      </button>
                    </div>
                  </li>
                </ul>
              </h2>
            </div>
          );
        })}
        <h2 style={{ fontSize: "2rem" }}>
          <ul style={{ listStyle: "none" }}>
            <li>{questions.question}</li>
          </ul>
        </h2>
      </div>

      <div>
        <button onClick={handleRestart}>Click here to restart</button>
        <button onClick={() => handleClicked(true)}>True</button>
        {showResult}
      </div>
    </>
  );
}
export default App;
