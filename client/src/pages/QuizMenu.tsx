import ReactJS from "../assets/subject-logos/React.png";
import CSS from "../assets/subject-logos/CSS.png";
import HTML from "../assets/subject-logos/HTML.png";
import JS from "../assets/subject-logos/JavaScript.png";
import { Link } from "react-router-dom";
import TempHeader from "../components/tempHeader";
import Footer from "../components/Footer";

export default function QuizMenu() {
  return (
    <>
      <>
        {/* header */}
        <TempHeader />
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
          <div className="relative container px-4 mx-auto">
            <div>
              <div className="flex flex-wrap -mx-10">
                <div className="relative w-full lg:w-1/2 px-10 mb-10 lg:mb-20">
                  <Link to="/quiz/react">
                    <img
                      className="lg:hidden absolute top-0 right-0 -mt-16"
                      src="zospace-assets/images/stars.svg"
                      alt=""
                    />
                    <div className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg">
                      <span className="flex mb-10 justify-center items-center w-20 h-20 bg-white rounded-lg">
                        <img src={ReactJS} alt="react-logo" />
                      </span>
                      <h3 className="mt-12 mb-8 text-4xl font-bold text-white">
                        React
                      </h3>
                      <p className="text-lg text-gray-200">
                        Whether you're a beginner seeking to solidify your
                        understanding or an experienced developer aiming to
                        brush up on the latest in React, this quiz offers
                        valuable insights and a practical review. Challenge
                        yourself, identify areas for improvement, and step into
                        your interview with confidence. From fundamental
                        concepts to advanced techniques, our questions touch on
                        JSX, components, state management, lifecycle methods,
                        hooks, performance optimization, and best practices!
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="relative w-full lg:w-1/2 px-10 mb-10 lg:mb-20">
                  <Link to="/quiz/css">
                    <div className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg">
                      <span className="flex mb-10 justify-center items-center w-20 h-20 bg-green-500 rounded-lg">
                        <img src={CSS} alt="css-logo" />
                      </span>
                      <h3 className="mt-12 mb-8 text-4xl font-bold text-white">
                        CSS
                      </h3>
                      <p className="text-lg text-gray-200">
                        Dive into a variety of questions encompassing selectors,
                        box model, layout techniques, responsiveness,
                        animations, preprocessors, and CSS best practices.
                        Whether you're a novice eager to establish a solid
                        foundation or a seasoned professional aiming to refresh
                        your knowledge, this challenge will test your
                        understanding, highlight areas needing reinforcement,
                        and enhance your problem-solving skills.
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-1/2 px-10 mb-10 lg:mb-20">
                  <Link to="/quiz/html">
                    <div className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg">
                      <span className="flex mb-10 justify-center items-center w-20 h-20 bg-violet-500 rounded-lg">
                        <img src={HTML} alt="html-logo" />
                      </span>
                      <h3 className="mt-12 mb-8 text-4xl font-bold text-white">
                        HTML
                      </h3>
                      <p className="text-lg text-gray-200">
                        This quiz is thoughtfully designed to encompass a wide
                        range of HTML topics, ensuring a thorough preparation
                        for any web developer interview. Engage with questions
                        spanning from basic tags to complex structures, semantic
                        HTML, accessibility standards, SEO best practices,
                        forms, multimedia integration, and the interplay between
                        HTML and other web technologies. Ideal for beginners
                        seeking a robust foundation or experienced developers
                        aiming for a refresher, this challenge helps you gauge
                        your knowledge, pinpoint improvement areas, and boost
                        your technical acumen
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-1/2 px-10 mb-10 lg:mb-20">
                  <Link to="/quiz/javascript">
                    <div className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg">
                      <span className="flex mb-10 justify-center items-center w-20 h-20 bg-pink-500 rounded-lg">
                        <img src={JS} alt="js-logo" />
                      </span>
                      <h3 className="mt-12 mb-8 text-4xl font-bold text-white">
                        JavaScript
                      </h3>
                      <p className="text-lg text-gray-200">
                        From fundamental syntax and operators to advanced
                        concepts like closures, prototypes, event delegation,
                        and asynchronous programming, we've got you covered. The
                        quiz also delves into ES6 features, error handling,
                        performance optimization, and testing, providing a
                        comprehensive review for developers of all levels.
                        Whether you're a novice aiming to solidify your basics
                        or an experienced coder looking to polish your expertise
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
        <Footer />
      </>
    </>
  );
}
