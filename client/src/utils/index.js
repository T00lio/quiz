import { useState, useCallback } from "react";

function parseQuestionOptions(question) {
  const options = [];

  // Recorremos las opciones y los booleanos correspondientes para construir los objetos de respuesta
  for (let i = 1; i <= 4; i++) {
    const optionName = question[`option${i}`];
    const correctName = question[`correct${i}`];

    // Añadimos un objeto al array de options
    options.push({
      name: optionName,
      isCorrect: correctName,
    });
  }

  return options;
}

export function getQuizDetails({ quizState, questions }) {
  const currentQuestion = questions[quizState.currentQuestionId];
  const options = parseQuestionOptions(currentQuestion);

  return {
    subject: quizState.subject,
    score: quizState.score,
    questionIndex: quizState.currentQuestionId + 1,
    questionName: currentQuestion.question,
    options,
    totals: questions.length,
  };
}

export function getUserAdapter(user) {
  const subjectsFormatted = user.subjects.map(({ name, quizzes }) => {
    let quizId = "";

    if (quizzes.length) {
      const quizInProgress = quizzes.find(
        (quiz) => quiz.status === "in_progress"
      );
      quizId = quizInProgress?.id || null;
    } else {
      quizId = null;
    }

    return {
      name,
      quizId,
    };
  });

  return {
    ...user,
    subjects: subjectsFormatted,
  };
}

export const useMutation = ({ mutateFn, adapter }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const mutate = useCallback(async (data) => {
    try {
      setIsLoading(true);
      const response = await mutateFn(data);
      if (adapter) setData(adapter(response));
      else setData(response);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, isError, data, mutate };
};
