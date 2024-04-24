import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <>
        {/* header */}
        <Header />
        {/* content section */}
        <section className="relative pt-20 pb-20 2xl:pb-40 overflow-hidden bg-black">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap mb-16 lg:mb-28">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
                <div className="max-w-md">
                  <span className="text-lg font-bold text-blue-500">
                    story time...
                  </span>
                  <h2 className="mt-12 mb-10 text-5xl lg:text-6xl font-bold font-heading text-white">
                    About
                  </h2>
                  <p className="mb-16 text-xl text-gray-300">
                    As I saw this topic appear on my Linked In feed over and
                    over, I wanted to include this into my topics into my study
                    routine but I could not find a place where all of these
                    questions where together, so I decided to go ahead and
                    create it. Initially I only considered to do a simple React
                    quiz, but then I challenged myself and decided to add more
                    topics and it turned out to be simple that I originally
                    thought
                  </p>
                  <a
                    className="inline-block px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                    href="/quizmenu"
                  >
                    Try it now
                  </a>
                </div>
              </div>
              <img
                className="lg:absolute lg:h-144 mr-auto mt-35 h-128 top-5 right-20"
                src="images/IMG-1583.jpeg"
                alt="About me"
              />
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="w-full lg:w-1/3 p-4">
                <div className="flex pt-8 lg:pt-20 border-t border-gray-50">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                      1
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-6 text-lg font-bold font-heading text-gray-300">
                      Register account - Feature in progress
                    </h3>
                    <p className="text-lg text-white">
                      In order to keep track of your scores, register an account
                      to keep up with updates and new features
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-4">
                <div className="flex pt-8 lg:pt-20 border-t border-gray-50">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                      2
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-6 text-lg font-bold font-heading text-gray-300">
                      Choose the quiz you want to learn
                    </h3>
                    <p className="text-lg text-white">
                      By repeating the question, you will memorize these inside
                      and out, think of it like a workout. More reps, more gains
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-4">
                <div className="flex pt-8 lg:pt-20 border-t border-gray-50">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                      3
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-6 text-lg font-bold font-heading text-gray-300">
                      Repeat
                    </h3>
                    <p className="text-lg text-white">
                      The exposure to this content will make a master in no
                      time, plus you will be able to show off to your friends
                    </p>
                  </div>
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
