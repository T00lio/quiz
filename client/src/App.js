import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import AboutPage from "./pages/About.js";
import SingupPage from "./pages/Singup.js";
import ContactPagePage from "./pages/Contact-page.js";
import QuizMenuPage from "./pages/Quiz-menu.js";
import Signin from "./pages/Signin.js";
import Quizcopy from "./pages/Quiz-copy.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/signin" element={<SingupPage />} />

      <Route path="/contactpage" element={<ContactPagePage />} />

      <Route path="/quizmenu" element={<QuizMenuPage />} />

      <Route path="/signup" element={<Signin />} />

      <Route path="/quiz/:subject" element={<Quizcopy />} />
    </Routes>
  );
}

export default App;
