import { useState, useEffect } from "react";
import reactQuestions from "./api/reactQuestions";
import logo from "/react.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [buttonBG, setButtonBG] = useState({
    button1: "",
    button2: "",
    button3: "",
    button4: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await reactQuestions.get("/api/questions");
        setQuestions(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleClicked = (optionIndex) => {
    const currentQuestion = questions[number];
    let newButtonBG = {};

    for (let i = 1; i <= 4; i++) {
      if (i === optionIndex) {
        newButtonBG[`button${i}`] =
          currentQuestion[`correct${i}`] === "TRUE" ? "green" : "red";

        setButtonBG(newButtonBG);
        if (currentQuestion[`correct${i}`] === "TRUE") {
          setScore(score + 1);
        }

        setTimeout(() => {
          if (number + 1 < questions.length) {
            setNumber(number + 1);
            setButtonBG({ button1: "", button2: "", button3: "", button4: "" });
          } else {
            setShowResult(true);
          }
        }, 1500);
      }
    }
  };

  const handleRestart = () => {
    setNumber(0);
    setScore(0);
    setShowResult(false);
  };

  if (!questions.length) return null;

  const currentQuestion = questions[number];
  console.log(currentQuestion);

  return (
    <>
      <div className="App">
        {/* app header */}
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
            className="App-title"
          >
            100 React Questions{" "}
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
              fontWeight: "500",
            }}
            className="App-intro"
          >
            This app will help you memorize the top 100 interview questions in
            React, HTML, CSS & Javascript
          </p>{" "}
        </header>
        {/******************  quiz section************* */}
        {showResult === true ? (
          <section className="quizSection">
            <h1 className="Result">Congratulations!</h1>
            <h3 className="Result">You successfully completed this quiz</h3>

            <h1 className="Result">
              Your Score is <bold>{score}</bold> out of{" "}
              <bold>{questions.length}</bold>
            </h1>
            <h3 className="Result">Thank you for taking the quiz!</h3>
          </section>
        ) : (
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
        )}
        {/***************** app footer ****************/}
        <footer className="Footer">
          <div className="row">
            <div className="col">
              <h5 className="dashboard">
                Progress: Question {questions[number]?.id} of {questions.length}
              </h5>
              {/* <h5 className="dashboard">Time: 10000</h5>
              <h5 className="dashboard">user</h5> */}
              Score: {score} out of: {questions.length}
            </div>
            <h5 className="col" style={{ textAlign: "center" }}>
              <button className="restart-button" onClick={handleRestart}>
                Click here to restart
              </button>
            </h5>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
