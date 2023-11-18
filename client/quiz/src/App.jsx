import { useState, useEffect } from "react";
import reactQuestions from "./api/reactQuestions";
import logo from "/vite.svg";
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
        setQuestions(response.data);
        console.log(response);
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
      <div>
        <p>{questions.data.questions}</p>
        <button>Click here to start</button>
      </div>
      <div>
        <button onClick={handleClicked}></button>
        <button onClick={handleRestart}></button>
        <button></button>
      </div>
    </>
  );
}
export default App;
