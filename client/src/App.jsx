import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/About";
import SingInPage from "./pages/SignUpPage";
import Contact from "./pages/Contact";
import QuizMenuPage from "./pages/QuizMenu";
import SignUpPage from "./pages/SignInPage";
import QuizComponent from "./pages/QuizPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/signin" element={<SingInPage />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/quizmenu" element={<QuizMenuPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/quiz/:subject" element={<QuizComponent />} />
      </Routes>
    </>
  );
}

export default App;
