import { Route, Routes } from "react-router-dom";

import QuizPage from "./pages/quizPage.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
