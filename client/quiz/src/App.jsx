import { useState, useEffect } from "react";
import reactQuestions from "./api/reactQuestions";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
      <Header />

      <div className="grid">
        <div className="question grid-item">
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
                        <button
                          className="optionButton"
                          onClick={handleClicked}
                        >
                          {question.option1}
                        </button>
                        <button
                          className="optionButton"
                          onClick={handleClicked}
                        >
                          {question.option3}
                        </button>
                        <button
                          className="optionButton"
                          onClick={handleClicked}
                        >
                          {question.option4}
                        </button>
                        <button
                          className="optionButton"
                          onClick={handleClicked}
                        >
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
        <div className="grid-item">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
