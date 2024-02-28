import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import Logo from "../assets/zospace-assets/images/logo.svg";

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
  const [showResult, setShowResult] = useState(true);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3004/api/questions");
        setQuestions(response.data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
        // Handle the error more visibly if needed
      }
    };
    fetchData();
  }, []);

  const questionData = questions[number];

  const handleClicked = (optionId, isCorrect) => {
    setClickedOption(optionId); // Track which button was clicked

    const correct =
      questionData[`correct${optionId.charAt(optionId.length - 1)}`] === "TRUE";

    if (correct) {
      setScore(score + 1);
    }
    // Set the background color immediately, if needed
    else
      setTimeout(() => {
        const nextQuest = number + 1;
        if (nextQuest < questions.length) {
          setNumber(nextQuest);
        } else {
          setShowResult(true);
        }
        setClickedOption(""); // Reset after the delay
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
    } else {
      setShowResult(true);
    }
  };

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        {/* header */}
        <section className="py-8 px-4 lg:px-10 bg-gray-800">
          <nav className="relative flex justify-between items-center">
            <a className="text-2xl text-white font-bold" href="/home">
              <img className="h-7" src={Logo} alt="" width="auto" />
            </a>
            <div className="lg:hidden">
              <button className="p-2 navbar-burger">
                <svg
                  className="w-10 h-3"
                  width={39}
                  height={13}
                  viewBox="0 0 39 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleMenu}
                >
                  <rect width={39} height={2} rx={1} fill="#C4C4C4" />
                  <rect
                    x={19}
                    y={11}
                    width={20}
                    height={2}
                    rx={1}
                    fill="#C4C4C4"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <ul className="flex items-center text-white space-x-10">
                <li>
                  <a className="text-white font-bold text-lg" href="/quizmenu">
                    Quizes
                  </a>
                </li>
                <span>
                  <svg
                    width={5}
                    height={5}
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B" />
                  </svg>
                </span>
                <li>
                  <a className="text-white font-bold text-lg" href="/about">
                    About
                  </a>
                </li>
                <span>
                  <svg
                    width={5}
                    height={5}
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B" />
                  </svg>
                </span>
                <li>
                  <a className="text-white font-bold text-lg" href="/contact">
                    Contact
                  </a>
                </li>
                <span></span>
                <li></li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <a
                className="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full"
                href="/singin"
              >
                Sign Up
              </a>
            </div>
          </nav>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
            <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
              <div className="flex items-center mb-16 pr-6">
                <a className="ml-10 text-2xl text-gray-800 font-bold" href="/">
                  <img
                    className="h-7"
                    src="zospace-assets/logos/zospace-dark-logo.svg"
                    alt=""
                    width="auto"
                  />
                </a>
              </div>
              <div>
                <ul>
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="/"
                    >
                      Quizes
                    </a>
                  </li>
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="/"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-1 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                      href="/"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mb-1 px-10"></li>
                </ul>
              </div>
              <div className="mt-auto px-10">
                <div className="pt-6">
                  <a
                    className="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full"
                    href="/"
                  >
                    Sign in
                  </a>
                  <a
                    className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                    href="/"
                  >
                    Sign up
                  </a>
                </div>
                <p className="mt-6 mb-4 text-lg text-center">
                  <span>2024 © tuliosalvatierra.com All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>
        {/* quiz section */}

        <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden bs-section-dragged">
          <div className="relative container px-4 mx-auto">
            <div className="flex flex-wrap -mx-10">
              <div className="relative w-full mb-10 lg:mb-20">
                <div className="px-16 pt-16 pb-24 bg-gray-600 rounded-2xl">
                  <div className="px-16 pt-16 pb-24 bg-gray-600 rounded-lg top-0">
                    {showResult ? (
                      <>
                        <div
                          className="container mx-auto bg-white rounded-2xl flex flex-row"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <div>
                          <h3 className="mt-12 mb-8 ml-auto text-4xl font-bold text-white">
                            Welcome to React Quiz
                          </h3>
                        </div>

                        <div className="mr-auto bg-white">
                          <p>Score 1 out of 10</p>
                          <p>Progeress 10%</p>
                        </div>
                        <h4 className="text-lg text-gray-100 mb-10">
                          Question {number}: {questionData?.question}
                        </h4>
                        <div className="grid-rows-4 flex flex-col">
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
                              handleClicked("option1", questionData.correct1)
                            }
                          >
                            {questionData?.option1}
                          </button>
                          {/* option 2 */}
                          <button
                            className={`rounded-xl p-5 mb-5 ${
                              clickedOption === "option2" &&
                              questionData.correct1 === "TRUE"
                                ? "bg-green-500"
                                : clickedOption === "option2"
                                ? "bg-red-500"
                                : "bg-white"
                            }`}
                            onClick={() =>
                              handleClicked("option1", questionData.correct2)
                            }
                          >
                            {questionData?.option2}
                          </button>
                          {/* option 3 */}
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
                              handleClicked("option1", questionData.correct1)
                            }
                          >
                            {questionData?.option3}
                          </button>
                          {/* option 4 */}
                          <button
                            className={`rounded-xl p-5 mb-5 ${
                              clickedOption === "option4"
                                ? "bg-green-500"
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
                            className="mr-5 bg-white rounded-full p-5"
                          >
                            Restast
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
                        <h3 className="text-3xl mb-2 leading-tight font-bold font-heading text-white">
                          You scored {score} out of {questions.length}
                        </h3>
                        <div className="mt-15 bg-white">
                          <button
                            onClick={handleRestart}
                            className="mr-5 bg-white rounded-full p-5 m-5"
                          >
                            Restast
                          </button>
                          <button
                            onClick={handleSkip}
                            className="mr-5 bg-white rounded-pull p-5 m-5"
                          >
                            go to home/nextquiz
                          </button>
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
        <section className="py-20 2xl:py-40 bg-gray-800">
          <div className="container mx-auto px-4 mb-12 md:mb-20">
            {" "}
            <div className="max-w-4xl mx-auto text-center">
              {" "}
              <a
                className="inline-block mb-20 text-white text-xl font-bold"
                href="/"
              >
                {" "}
                <img
                  className="h-7"
                  src="images/portfolio-logologo.svg"
                  alt=""
                  width="auto"
                />
              </a>{" "}
              <ul className="mb-12 md:mb-20 flex flex-wrap items-center justify-center md:justify-between text-lg space-x-0">
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="/"
                  >
                    Home
                  </a>
                </li>{" "}
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="/"
                  >
                    Services
                  </a>
                </li>{" "}
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="/"
                  >
                    Packages
                  </a>
                </li>{" "}
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="/"
                  >
                    About
                  </a>
                </li>{" "}
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="/"
                  >
                    Reach Out
                  </a>
                </li>{" "}
              </ul>
              <div className="flex justify-center">
                {" "}
                <a
                  className="flex justify-center items-center w-12 h-12 mr-4 bg-gray-600 rounded-full"
                  href="/"
                >
                  {" "}
                  <svg
                    className="h-4 w-4 text-white"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M17.0064 3.181e-08H0.992752C0.444397 0.00027469 -0.000137297 0.445084 3.181e-08 0.993576V17.0072C0.00027469 17.5556 0.445084 18.0001 0.993576 18H17.0064C17.5551 18.0001 17.9999 17.5555 18 17.0068C18 17.0067 18 17.0066 18 17.0064V0.992752C17.9997 0.444397 17.5549 -0.000137297 17.0064 3.181e-08Z"
                        fill="white"
                      />
                      <path
                        d="M12.4277 18.0001V11.0391H14.7744L15.126 8.31453H12.4277V6.57924C12.4277 5.79221 12.6462 5.25594 13.7748 5.25594H15.2051V2.82562C14.9562 2.79253 14.1025 2.71851 13.109 2.71851C11.0348 2.71851 9.61523 3.98413 9.61523 6.30939V8.31453H7.27734V11.0391H9.61523V18.0001H12.4277Z"
                        fill="#2D2D33"
                      />
                    </g>
                  </svg>
                </a>{" "}
                <a
                  className="flex justify-center items-center w-12 h-12 mr-4 bg-gray-600 rounded-full"
                  href="/"
                >
                  {" "}
                  <svg
                    className="h-4 w-4 text-white"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M17.982 5.29205C17.9398 4.33564 17.7852 3.67812 17.5636 3.10836C17.3351 2.50359 16.9834 1.96213 16.5227 1.51201C16.0726 1.05489 15.5276 0.699691 14.9298 0.474702C14.3568 0.253147 13.7027 0.0984842 12.7463 0.0563159C11.7827 0.0105764 11.4768 0 9.03301 0C6.58917 0 6.28328 0.0105764 5.3233 0.0527447C4.36689 0.0949129 3.70937 0.249713 3.13975 0.471131C2.53484 0.699691 1.99338 1.05132 1.54326 1.51201C1.08614 1.96213 0.731078 2.50716 0.505952 3.10493C0.284397 3.67812 0.129734 4.33207 0.0875659 5.28848C0.0418264 6.25203 0.03125 6.55792 0.03125 9.00176C0.03125 11.4456 0.0418264 11.7515 0.0839947 12.7115C0.126163 13.6679 0.280963 14.3254 0.502518 14.8952C0.731078 15.4999 1.08614 16.0414 1.54326 16.4915C1.99338 16.9486 2.53841 17.3038 3.13618 17.5288C3.70937 17.7504 4.36332 17.905 5.31986 17.9472C6.27971 17.9895 6.58574 17.9999 9.02957 17.9999C11.4734 17.9999 11.7793 17.9895 12.7393 17.9472C13.6957 17.905 14.3532 17.7504 14.9228 17.5288C16.1325 17.0611 17.0889 16.1047 17.5566 14.8952C17.778 14.322 17.9328 13.6679 17.975 12.7115C18.0172 11.7515 18.0278 11.4456 18.0278 9.00176C18.0278 6.55792 18.0242 6.25203 17.982 5.29205ZM16.3611 12.6411C16.3223 13.5202 16.1747 13.9949 16.0516 14.3114C15.7492 15.0956 15.1268 15.7179 14.3426 16.0204C14.0262 16.1434 13.548 16.2911 12.6724 16.3297C11.723 16.372 11.4382 16.3824 9.03658 16.3824C6.63491 16.3824 6.3466 16.372 5.40063 16.3297C4.52155 16.2911 4.04685 16.1434 3.73038 16.0204C3.34015 15.8761 2.98495 15.6476 2.69664 15.3487C2.39775 15.0568 2.16919 14.7052 2.02497 14.315C1.9019 13.9985 1.75424 13.5202 1.71565 12.6447C1.67334 11.6953 1.6629 11.4104 1.6629 9.00876C1.6629 6.60709 1.67334 6.31878 1.71565 5.37295C1.75424 4.49387 1.9019 4.01917 2.02497 3.7027C2.16919 3.31234 2.39775 2.95727 2.70021 2.66883C2.99196 2.36994 3.34359 2.14138 3.73395 1.99729C4.05042 1.87422 4.52869 1.72656 5.4042 1.68783C6.3536 1.64566 6.63848 1.63508 9.04001 1.63508C11.4453 1.63508 11.73 1.64566 12.676 1.68783C13.555 1.72656 14.0297 1.87422 14.3462 1.99729C14.7364 2.14138 15.0916 2.36994 15.3799 2.66883C15.6788 2.96071 15.9074 3.31234 16.0516 3.7027C16.1747 4.01917 16.3223 4.49731 16.3611 5.37295C16.4032 6.32236 16.4138 6.60709 16.4138 9.00876C16.4138 11.4104 16.4032 11.6917 16.3611 12.6411Z"
                        fill="white"
                      />
                      <path
                        d="M9.03411 4.37793C6.48135 4.37793 4.41016 6.44898 4.41016 9.00188C4.41016 11.5548 6.48135 13.6258 9.03411 13.6258C11.587 13.6258 13.6581 11.5548 13.6581 9.00188C13.6581 6.44898 11.587 4.37793 9.03411 4.37793ZM9.03411 12.0013C7.37801 12.0013 6.03467 10.6581 6.03467 9.00188C6.03467 7.34564 7.37801 6.00244 9.03411 6.00244C10.6903 6.00244 12.0335 7.34564 12.0335 9.00188C12.0335 10.6581 10.6903 12.0013 9.03411 12.0013Z"
                        fill="white"
                      />
                      <path
                        d="M14.9208 4.1952C14.9208 4.79133 14.4375 5.27468 13.8412 5.27468C13.2451 5.27468 12.7617 4.79133 12.7617 4.1952C12.7617 3.59894 13.2451 3.11572 13.8412 3.11572C14.4375 3.11572 14.9208 3.59894 14.9208 4.1952Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </a>{" "}
                <a
                  className="flex justify-center items-center w-12 h-12 bg-gray-600 rounded-full"
                  href="/"
                >
                  {" "}
                  <svg
                    className="w-4 h-4 text-white"
                    width={18}
                    height={16}
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2.41887C17.3306 2.7125 16.6174 2.90712 15.8737 3.00162C16.6388 2.54487 17.2226 1.82712 17.4971 0.962C16.7839 1.38725 15.9964 1.68763 15.1571 1.85525C14.4799 1.13413 13.5146 0.6875 12.4616 0.6875C10.4186 0.6875 8.77387 2.34575 8.77387 4.37863C8.77387 4.67113 8.79862 4.95237 8.85938 5.22012C5.7915 5.0705 3.07687 3.60013 1.25325 1.36025C0.934875 1.91263 0.748125 2.54488 0.748125 3.2255C0.748125 4.5035 1.40625 5.63637 2.38725 6.29225C1.79437 6.281 1.21275 6.10888 0.72 5.83775C0.72 5.849 0.72 5.86363 0.72 5.87825C0.72 7.6715 1.99912 9.161 3.6765 9.50412C3.37612 9.58625 3.04875 9.62562 2.709 9.62562C2.47275 9.62562 2.23425 9.61213 2.01038 9.56262C2.4885 11.024 3.84525 12.0984 5.4585 12.1332C4.203 13.1154 2.60888 13.7071 0.883125 13.7071C0.5805 13.7071 0.29025 13.6936 0 13.6565C1.63462 14.7106 3.57188 15.3125 5.661 15.3125C12.4515 15.3125 16.164 9.6875 16.164 4.81175C16.164 4.64862 16.1584 4.49113 16.1505 4.33475C16.8829 3.815 17.4982 3.16587 18 2.41887Z"
                      fill="white"
                    />
                  </svg>
                </a>{" "}
              </div>{" "}
            </div>
          </div>{" "}
          <p className="text-center text-lg text-white pt-12 px-4 border-t border-gray-500">
            {" "}
            <span>
              © 2024 <a href="tuliosalvatierra.com">tuliosalvatierra.com</a>
            </span>{" "}
            <span className="text-gray-300">All rights reserved.</span>
          </p>
        </section>
      </>
    </React.Fragment>
  );
}
