import React, { useState, useEffect } from "react";
import apiClient from "../apiClient";

interface Option {
  optionText: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
}

const TestApiComponent: React.FC = () => {
  const [data, setData] = useState<Question[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiClient(
          "http://localhost:3000/api/questions/css"
        );
        setData(result);
        setLoading(false);
        console.log(`Fetched questions: ${JSON.stringify(result)}`);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-white">Quiz Questions</h1>
      <ul>
        {data?.map((question, index) => (
          <li key={index}>
            <h2 className="text-white">{question.question}</h2>
            <ul>
              {question.options.map((option, idx) => (
                <li key={idx} className="text-white">
                  {option.optionText} -{" "}
                  {option.isCorrect ? "Correct" : "Incorrect"}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestApiComponent;
