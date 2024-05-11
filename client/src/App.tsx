import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import AboutPage from "./pages/About";
import SingInPage from "./pages/SignUpPage";
import Contact from "./pages/Contact";
import QuizMenu from "./pages/QuizMenu";
import SignUpPage from "./pages/SignInPage";
import QuizPage from "./pages/QuizPage_new";
import ProfilePage from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SingInPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quizmenu" element={<QuizMenu />} />
      <Route path="/signin" element={<SignUpPage />} />
      <Route path="/quiz/:quizId" element={<QuizPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
