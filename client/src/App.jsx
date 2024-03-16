import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import AboutPage from "./pages/About.jsx";
import SingupPage from "./pages/Singup.jsx";
import Contact from "./pages/Contact.jsx";
import QuizMenuPage from "./pages/QuizMenu.jsx";
import Signin from "./pages/Signin.jsx";
import Quizcopy from "./pages/QuizPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/signin" element={<SingupPage />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/quizmenu" element={<QuizMenuPage />} />

        <Route path="/signup" element={<Signin />} />

        <Route path="/quiz/:subject" element={<Quizcopy />} />
      </Routes>
    </>
  );
}

export default App;
