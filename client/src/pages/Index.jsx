import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import landingImage from "../assets/images/landing.webp";
import ContactForm from "../components/ContactForm";

export default function Index() {
  console.log(process.env.REACT_APP_PUBLIC_KEY);
  return (
    <React.Fragment>
      {/* header */}
      <Header />
      {/* content */}
      <section className="relative pt-20 2xl:pt-20 bg-gray-800 pb-20">
        <div className="relative container px-4 pt-12 md:pt-20 mx-auto mb-20">
          <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
            <div className="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <span className="text-lg font-bold text-blue-400">
                  Challenge Accepted?
                </span>

                <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
                  Start mastring now and join the elite!
                </h2>
                <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">
                  Pratice the top 100 interview on React, HTML, CSS and
                  Javascript
                </p>
                <a
                  className="inline-block px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-2xl"
                  href="/quizmenu"
                >
                  Boost Your Skills Today
                </a>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <img className="w-full rounded-2xl" src={landingImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact form */}
      <ContactForm />
      {/* footer */}
      <Footer />
    </React.Fragment>
  );
}
