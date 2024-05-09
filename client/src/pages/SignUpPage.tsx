import { PORTFOLIO_URL } from "../constants";
import SignUpLanding from "../components/SignUpLanding";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import Footer from "../components/footer";

function SignUpPage() {
  return (
    <>
      <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
        <img
          className="hidden lg:block absolute inset-0 mt-32"
          src="zospace-assets/lines/line-mountain.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute inset-y-0 right-0 -mr-40 -mt-32"
          src="zospace-assets/lines/line-right-long.svg"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <SignUpLanding />
              </div>
              <div className="w-full lg:w-1/2 px-4 bg-gray-400 rounded-lg bg-opacity-25">
                <div className="lg:px-20 py-12 lg:py-24 h-full">
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center h-6">
        <a
          href={PORTFOLIO_URL}
          className="text-blue-400 hover:underline mr-auto p-6"
        >
          tuliosalvatierra.com
        </a>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
