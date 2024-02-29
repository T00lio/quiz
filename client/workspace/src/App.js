import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import AboutPage from "./pages/About.js";
import QuizPage from "./pages/Quiz.js";
import SingupPage from "./pages/Singup.js";
import ContactPagePage from "./pages/Contact-page.js";
import QuizMenuPage from "./pages/Quiz-menu.js";
import SingupDuplicate1Page from "./pages/Singup-duplicate1.js";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<IndexPage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/quiz" element={<QuizPage />} />

      <Route path="/signup" element={<SingupPage />} />

      <Route path="/contactpage" element={<ContactPagePage />} />

      <Route path="/quizmenu" element={<QuizMenuPage />} />

      <Route path="/singin" element={<SingupDuplicate1Page />} />
    </Routes>
  );
}

export default App;
