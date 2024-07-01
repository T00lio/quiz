import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SuccessSection from "../components/Success";
import { mockFetch } from "../mock-backend";
import { getQuizDetails, useMutation } from "../utils";
import Quiz from "../components/Quiz";

function QuizPage() {
  const { quizId } = useParams();
  const {
    mutate: updateQuiz,
    data,
    isLoading,
  } = useMutation({
    mutationFn: (props) => mockFetch(`/api/quiz/${quizId}`, props),
    adapter: getQuizDetails,
  });

  useEffect(() => {
    updateQuiz({ operation: "resume" });
  }, [updateQuiz]);

  const showResult = data && data.totals === data.questionIndex;

  const handleRestart = () => {};

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
                <div className="pt-16 pb-24 bg-gray-600 rounded-lg top-0  min-h-full">
                  <>
                    {isLoading ? <div className="loader"></div> : null}
                    {!showResult && !isLoading && data ? (
                      <Quiz {...data} updateQuiz={updateQuiz} />
                    ) : null}
                    {showResult ? (
                      <>
                        <SuccessSection
                          score={data.score}
                          handleRestart={handleRestart}
                          numberOfQuestions={data.totals}
                        />
                      </>
                    ) : null}
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

export default QuizPage;
