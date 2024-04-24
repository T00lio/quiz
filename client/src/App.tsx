import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import AboutPage from "./pages/About";
import SingInPage from "./pages/SignUpPage";
import Contact from "./pages/Contact";
import QuizMenuPage from "./pages/QuizMenu";
import SignUpPage from "./pages/SignInPage";
import QuizComponent from "./pages/QuizPage";
import ProfilePage from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SingInPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quizmenu" element={<QuizMenuPage />} />
      <Route path="/signin" element={<SignUpPage />} />
      <Route path="/quiz/:subject" element={<QuizComponent />} />

      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
