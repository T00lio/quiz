import React, { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/questions/react",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err: Error) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Quiz Questions</h1>
      <ul>
        {data?.map((question: any, index: number) => (
          <li key={index}>
            <h2>{question?.question}</h2>
            <ul>
              {question.options.map((option: any, idx: number) => (
                <li key={idx}>
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
}
