import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subject from "../components/Subject";
import { mockFetch } from "../mock-backend";
import { useMutation, getUserAdapter } from "../utils";

export default function QuizMenu() {
  const { data, mutate, isLoading } = useMutation({
    mutateFn: () => mockFetch("/api/user"),
    adapter: getUserAdapter,
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  return (
    <>
      <>
        {/* header */}
        <Header />
        {/* content section */}
        <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
          <img
            className="hidden lg:block absolute top-0 left-0 -ml-96 -mt-40"
            src="zospace-assets/lines/circle.svg"
            alt=""
          />
          <img
            className="hidden lg:block absolute bottom-0 right-0 -mr-32 -mb-72"
            src="zospace-assets/lines/circle.svg"
            alt=""
          />
          {isLoading ? (
            "Is Loading"
          ) : data ? (
            <div className="relative container px-4 mx-auto">
              <div>
                <div className="flex flex-wrap -mx-10">
                  {data?.subjects?.map(({ name, quizId }, index) => (
                    <Subject
                      key={`${name}-${index}`}
                      name={name}
                      quizId={quizId}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </section>
        {/* footer */}
        <Footer />
      </>
    </>
  );
}
