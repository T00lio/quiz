import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index.jsx";
import AboutPage from "./pages/About.jsx";
import SingupPage from "./pages/Singup.jsx";
import Contact from "./pages/Contact.jsx";
import QuizMenuPage from "./pages/QuizMenu.jsx";
import Signin from "./pages/Signin.jsx";
import Quiz from "./pages/QuizPage.jsx";
import Profile from "./pages/Profile.jsx";

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

        <Route path="/quiz/:subject" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
