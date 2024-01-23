import { useState, useEffect } from "react";
import reactQuestions from "./api/reactQuestions.js";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import QuizSection from "./components/QuizSection/QuizSection";
import ResultSection from "./components/ResultSection/ResultSection";

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
          if (number + 1 < questions?.length) {
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
        <Header />

        {/******************  quiz section************* */}
        {showResult === true ? (
          <ResultSection score={score} questions={questions} />
        ) : (
          <QuizSection
            score={score}
            buttonBG={buttonBG}
            questions={questions}
            currentQuestion={currentQuestion}
            handleClicked={handleClicked}
          />
        )}
        {/***************** app footer ****************/}
        <Footer
          number={number}
          questions={questions}
          score={score}
          handleRestart={handleRestart}
        />
      </div>
    </>
  );
}

export default App;
