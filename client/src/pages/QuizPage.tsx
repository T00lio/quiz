import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SuccessSection from "../components/Success";
import OptionButton from "../components/OptionButton";

interface QuestionData {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct1: string;
  correct2: string;
  correct3: string;
  correct4: string;
}

function QuizComponent() {
  const { subject } = useParams();
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3004/api/questions?subject=${subject}`
        );

        setQuestions(response.data);
      } catch (error) {
        console.log("Failed to fetch questions:", error);
      }
    };
    fetchData();
  }, [subject]);

  const handleOptionSelection = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = number + 1;
      if (nextQuestion < questions.length) {
        setNumber(nextQuestion);
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

  const handleSkip = () => {
    const nextQuest = number + 1;
    if (nextQuest < questions.length) {
      setNumber(nextQuest);
    }
  };

  const questionData = questions[number];

  return (
    <>
      {/* header */}
      <Header />
      {/* main */}
      <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden bs-section-dragged">
        <div className="relative container px-4 mx-auto">
          <div className="flex flex-wrap -mx-10">
            <div className="relative w-full mb-10 lg:mb-20">
              <div className="px-16 pt-16 pb-24 bg-gray-600 rounded-2xl">
                <div className=" pt-16 pb-24 bg-gray-600 rounded-lg top-0">
                  <>
                    {!showResult ? (
                      <>
                        <div className="grid grid-cols-2 gap-4" />

                        <h3 className="mt-12 mb-8 ml-auto text-4xl font-bold text-white w-50">
                          Welcome to the {subject} Quiz
                        </h3>
                        <div className="flex justify-between">
                          <h3 className="text-2xl mr-auto text-white mb-10 mt-10 font-bold w-1/2">
                            Question {questionData?.id}:{questionData?.question}
                          </h3>
                          <div className="w-1/4 ml-auto bg-white rounded-xl p-4">
                            <p className="w-25 ml-auto mr-auto mt-5">{`Score ${score} / ${questions.length}`}</p>
                            <h3 className="w-25 ml-auto mr-auto mt-5">
                              Progress {questionData?.id} / {questions?.length}
                            </h3>
                          </div>
                        </div>
                        <div className="grid-rows-4 flex flex-col mt-10 bg-gray-500 p-5 rounded-lg">
                          <div className="option-container mt-5 shadow-xl">
                            {questionData &&
                              ["option1", "option2", "option3", "option4"].map(
                                (optionKey) => (
                                  <OptionButton
                                    key={optionKey}
                                    label={questionData[
                                      optionKey as keyof QuestionData
                                    ].toString()}
                                    isCorrect={
                                      questionData[
                                        `correct${optionKey.charAt(
                                          optionKey.length - 1
                                        )}` as keyof QuestionData
                                      ] === "TRUE"
                                    }
                                    onOptionSelected={handleOptionSelection}
                                  />
                                )
                              )}
                          </div>
                        </div>
                        <div className="mt-5">
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
                        <SuccessSection
                          score={score}
                          handleRestart={handleRestart}
                        />
                      </>
                    )}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
}

export default QuizComponent;
