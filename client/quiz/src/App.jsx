import { useState, useEffect } from "react";
import reactQuestions from "./api/reactQuestions";
import logo from "/react.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [, setResultBG] = useState("");
  const [score, setScore] = useState(0);
  const [buttonBG, setButtonBG] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await reactQuestions.get("/api/questions");
        setQuestions(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleClicked = (correct1, correct2, correct3, correct4) => {
    const isOption1Correct = correct1 === "true";
    const isOption2Correct = correct2 === "true";
    const isOption3Correct = correct3 === "true";
    const isOption4Correct = correct4 === "true";

    // Create an object to store the background color for each button
    const buttonBG = {
      button1: isOption1Correct ? "green" : "red",
      button2: isOption2Correct ? "green" : "red",
      button3: isOption3Correct ? "green" : "red",
      button4: isOption4Correct ? "green" : "red",
    };

    // Update the background colors for the option buttons individually
    setButtonBG(buttonBG);

    // Calculate the overall correctness
    const isCorrect =
      isOption1Correct ||
      isOption2Correct ||
      isOption3Correct ||
      isOption4Correct;

    // Set the overall background color based on correctness
    setResultBG(isCorrect ? "green" : "red");

    setTimeout(() => {
      // Reset the background colors when the timer expires
      setButtonBG({});
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

  // const questionData = questions[number];

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
              fontWeight: "500",
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
        <section className="Result">
          {" "}
          {/* <h1>{questionData?.question_text}</h1> */}
          <button
            className="OptionButton"
            style={{ backgroundColor: buttonBG.button1 }}
            onClick={
              () => handleClicked()
              // questionData?.correct1,
              // questionData?.correct2,
              // questionData?.correct3,
              // questionData?.correct4
            }
          >
            {/* {questionData?.option1} */}
          </button>
          <button
            className="OptionButton"
            style={{ backgroundColor: buttonBG.button2 }}
            onClick={
              () => handleClicked()
              // questionData?.correct1,
              // questionData?.correct2,
              // questionData?.correct3,
              // questionData?.correct4
            }
          >
            {/* {questionData?.option2} */}
          </button>
          <button
            className="OptionButton"
            style={{ backgroundColor: buttonBG.button3 }}
            onClick={
              () => handleClicked()
              // questionData?.correct1,
              // questionData?.correct2,
              // questionData?.correct3,
              // questionData?.correct4
            }
          >
            {/* {questionData?.option3} */}
          </button>
          <button
            className="OptionButton"
            style={{ backgroundColor: buttonBG.button4 }}
            onClick={
              () => handleClicked()
              // questionData?.correct1,
              // questionData?.correct2,
              // questionData?.correct3,
              // questionData?.correct4
            }
          >
            {/* {questionData?.option4} */}
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
export default App;
