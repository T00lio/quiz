import { useState, useEffect } from "react";
import logo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/questions");
      const data = await res.json();
      setQuestions(data);
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

      {showResult === true ? (
        <div>
          <h2 style={{ textAlign: "center" }}>Result</h2>
          <strong>
            You scored {score} out of {questions.length}
          </strong>
        </div>
      ) : (
        ""
      )}
      <p
        key={number}
        style={{ textAlign: "center", fontSize: "1.25rem", fontWeight: "300" }}
      >
        Progress: Question {number + 1} / {questions.length}
      </p>
      <p style={{ textAlign: "center" }}>Score : {score}</p>

      <div
        style={{
          width: "50%",
          margin: "0 auto",
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            fontWeight: "900",
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "3rem",
          }}
        >
          {questions[number].question}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            marginTop: ".5rem",
            fontSize: "1.2rem",
          }}
        >
          {questions[number].options.map((opt) => (
            <button onClick={() => handleClicked(opt.isTrue)} key={opt.id}>
              {opt.option}
            </button>
          ))}
        </div>
        <div className="button">
          <button onClick={() => handleRestart()}>Restart Quiz</button>
        </div>
      </div>
      <br />
    </>
  );
}
export default App;
