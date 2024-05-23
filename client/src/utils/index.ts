import { useState, useCallback } from "react";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

function parseQuestionOptions(question: any) {
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

export function getQuizDetails({ quizState, questions }: { quizState: any; questions: any }) {
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

export function getUserAdapter(user: any) {
  const subjectsFormatted = user.subjects.map(({ name, quizzes }: { name: any; quizzes: any }) => {
    let quizId: string | null = "";

    if (quizzes.length) {
      const quizInProgress = quizzes.find((quiz: any) => quiz.status === "in_progress");
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

export interface ErrorResponse {
  message: string;
  statusCode: number;
}

export interface FetchOptions extends RequestInit {
  requestBody?: Record<string, any> | string;
}

export const fetchFn = async (endpoint: string, options: FetchOptions = { headers: {} }) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      credentials: options.credentials,
      body: JSON.stringify(options.requestBody),
    });

    const responseBody = await response.json();

    if (!response.ok) {
      // Manejo de errores HTTP específicos
      const error: ErrorResponse = {
        message: responseBody.message || "An error occurred",
        statusCode: response.status,
      };
      throw error;
    }

    return responseBody;
  } catch (error) {
    // Manejo de errores inesperados del servidor
    throw error;
  }
};

interface MutationParams<T, R = T, V = void> {
  // Default R to T if not provided
  mutationFn: (variables: V) => Promise<T>;
  adapter?: (data: T) => R;
  onSuccess?: (data: R) => void;
  onError?: (error: unknown) => void;
}

interface MutationResult<R, V = void> {
  data: R | null;
  error: unknown;
  isLoading: boolean;
  mutate: (variables: V) => Promise<void>;
}

export const useMutation = <T, R = T, V = void>({
  mutationFn,
  adapter,
  onSuccess,
  onError,
}: MutationParams<T, R, V>): MutationResult<R, V> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<R | null>(null);

  const mutate = useCallback(async (variables: V) => {
    setIsLoading(true);
    setError(null);

    try {
      const response: T = await mutationFn(variables);
      const adaptedData: R = adapter ? adapter(response) : (response as unknown as R);
      setData(adaptedData);
      if (onSuccess) onSuccess(adaptedData);
    } catch (error: unknown) {
      setError(error);
      if (onError) onError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, data, mutate };
};

export const handleDefaultError = (error: unknown) => {
  if (typeof error === "object" && error !== null && "message" in error) {
    toast.error((error as ErrorResponse).message);
  } else {
    toast.error("An unexpected error occurred");
  }
};
