import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import Footer from "../components/footer/footer";
import Header from "../components/header/index";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Quiz() {
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState("");
  console.log(showResult);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3004/api/questions");
        setQuestions(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Failed to fetch questions:", error);
        // Handle the error more visibly if needed
      }
    };
    fetchData();
  }, []);

  const handleClicked = (optionId, isCorrect) => {
    setClickedOption(optionId); // Track which button was clicked

    const correct =
      questionData[`correct${optionId.charAt(optionId.length - 1)}`] === "TRUE";

    // Update the score if the answer is correct
    if (correct) {
      setScore(score + 1);
    }

    // Wait for 1.5 seconds before moving to the next question
    setTimeout(() => {
      const nextQuest = number + 1;
      if (nextQuest < questions.length) {
        setNumber(nextQuest);
      } else {
        setShowResult(false);
      }
      setClickedOption(""); // Reset clicked option for the next question
    }, 1500);
  };
  console.log(showResult);

  const handleRestart = () => {
    setNumber(0);
    setScore(0);
    setShowResult(false);
  };
  console.log(showResult);

  const handleSkip = () => {
    const nextQuest = number + 1;
    if (nextQuest < questions.length) {
      setNumber(nextQuest);
    } else {
      setShowResult(false);
    }
  };
  console.log(showResult);

  const questionData = questions[number];

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        {/* header */}
        <Header />
        {/* main */}
        <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden bs-section-dragged">
          <div className="relative container px-4 mx-auto">
            <div className="flex flex-wrap -mx-10">
              <div className="relative w-full mb-10 lg:mb-20">
                <div className="px-16 pt-16 pb-24 bg-gray-600 rounded-2xl">
                  <div className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg top-0">
                    {showResult ? (
                      <>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4" />

                        <h3 className="mt-12 mb-8 ml-auto text-4xl font-bold text-white w-50">
                          Welcome to the React Quiz
                        </h3>
                        <div className="bg-white rounded-xl p-4 w-1/4">
                          <p className="w-25 ml-auto mr-auto">
                            {`Score ${score} out of ${questions.length}`}
                          </p>
                          <h3 className="w-25 ml-auto mr-auto mt-5">
                            Progress {questionData?.id} out of{" "}
                            {questionData?.length}
                          </h3>
                        </div>

                        <h3 className="text-2xl text-white mb-10 mt-10 font-bold">
                          Question {questionData?.id}: {questionData?.question}
                        </h3>
                        <div></div>
                        <div className="grid-rows-4 flex flex-col ">
                          {/* option1 */}
                          <button
                            className={`rounded-xl p-5 mb-5 ${
                              clickedOption === "option1" &&
                              questionData.correct1 === "TRUE"
                                ? "bg-green-500"
                                : clickedOption === "option1"
                                ? "bg-red-500"
                                : "bg-white"
                            }`}
                            onClick={() =>
                              handleClicked("option1", questionData?.correct1)
                            }
                          >
                            {questionData?.option1}
                          </button>
                          {/* option 2 */}
                          <button
                            className={`rounded-xl p-5 mb-5 ${
                              clickedOption === "option2" &&
                              questionData?.correct2 === "TRUE"
                                ? "bg-green-500"
                                : clickedOption === "option2"
                                ? "bg-red-500"
                                : "bg-white"
                            }`}
                            onClick={() =>
                              handleClicked("option2", questionData?.correct2)
                            }
                          >
                            {questionData?.option2}
                          </button>
                          {/* option 3 */}
                          <button
                            className={`rounded-xl p-5 mb-5 ${
                              clickedOption === "option3" &&
                              questionData?.correct3 === "TRUE"
                                ? "bg-green-500"
                                : clickedOption === "option3"
                                ? "bg-red-500"
                                : "bg-white"
                            }`}
                            onClick={() =>
                              handleClicked("option3", questionData?.correct3)
                            }
                          >
                            {questionData?.option3}
                          </button>
                          {/* option 4 */}
                          <button
                            className={`rounded-xl p-5 mb-5 ${
                              clickedOption === "option4" &&
                              questionData?.correct3 === "TRUE"
                                ? "bg-green-500"
                                : clickedOption === "option4"
                                ? "bg-red-500"
                                : "bg-white"
                            }`}
                            onClick={() =>
                              handleClicked("option4", questionData?.correct4)
                            }
                          >
                            {questionData?.option4}
                          </button>
                        </div>
                        <div className="mt-15 p-15">
                          <button
                            onClick={handleRestart}
                            className="mr-5 bg-red-500 rounded-full p-5"
                          >
                            Restart
                          </button>
                          <button
                            onClick={handleSkip}
                            className="mr-5 rounded-full p-5 bg-white"
                          >
                            skip question
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <h1 className="text-5xl mb-2 leading-tight font-bold font-heading text-white">
                          Congratulations!
                        </h1>
                        <h2 className="text-4xl mb-2 leading-tight font-bold font-heading text-white">
                          You sucesfully completed the quiz, here are your
                          results:
                        </h2>
                        <h3 className="text-4xl mt-2 mb-2 leading-tight font-bold font-heading text-white">
                          You scored {score} out of {questions.length}
                        </h3>
                        <div className="mt-32">
                          <button
                            onClick={handleRestart}
                            className="mr-5 bg-red-500 rounded-full p-5 m-5"
                          >
                            Restart
                          </button>
                          <a
                            href="/quizmenu"
                            className="mr-5 bg-green-500 rounded-full p-5 m-5"
                          >
                            Go to quiz menu
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
        <Footer />
      </>
    </React.Fragment>
  );
}
