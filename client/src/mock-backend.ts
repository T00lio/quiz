import mockedQuestions from "./mock-data.json";

// Define types for questions and quiz state
interface Question {
  id: number;
  question: string;
  option1: string;
  correct1: boolean;
  option2: string;
  correct2: boolean;
  option3: string;
  correct3: boolean;
  option4: string;
  correct4: boolean;
  subject: string;
}

interface QuizState {
  id: string;
  status: string;
  score: number;
  currentQuestionId: number;
  subject: string;
}

// Initial quiz state
let quizState: QuizState = {
  id: "",
  status: "in_progress",
  score: 0,
  currentQuestionId: 0,
  subject: "",
};

// Define the user type
interface User {
  userId: string;
  username: string;
  subjects: {
    name: string;
    quizzes: unknown[];
  }[];
}

// Initial user state
const user: User = {
  userId: "",
  username: "",
  subjects: [
    { name: "", quizzes: [] },
    { name: "", quizzes: [] },
    { name: "", quizzes: [] },
    { name: "", quizzes: [] },
  ],
};

// Utility function to generate unique IDs
function getUniqueId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Function to select the next question and update the state
function selectQuestion(isCorrect: boolean) {
  const questions = mockedQuestions.filter(
    (question: Question) => question.subject === quizState.subject
  );
  const newState = {
    questions,
    quizState: {
      ...quizState,
      currentQuestionId: quizState.currentQuestionId + 1,
      score: isCorrect ? quizState.score + 1 : quizState.score,
    },
  };

  quizState = newState.quizState;
  return newState;
}

// Function to restart the quiz
function restartQuiz() {
  const questions = mockedQuestions.filter(
    (question: Question) => question.subject === quizState.subject
  );
  const newState = {
    questions,
    quizState: {
      ...quizState,
      status: "in_progress",
      score: 0,
      currentQuestionId: 0,
    },
  };

  quizState = newState.quizState;
  return newState;
}

// Function to skip the current question
function skipQuestion() {
  const questions = mockedQuestions.filter(
    (question: Question) => question.subject === quizState.subject
  );
  const newState = {
    questions,
    quizState: {
      ...quizState,
      currentQuestionId: quizState.currentQuestionId + 1,
    },
  };

  quizState = newState.quizState;
  return newState;
}

// Function to initialize the quiz
function initQuiz(subject: string | undefined) {
  if (!subject) {
    throw new Error("Subject is required.");
  }

  const questions = mockedQuestions.filter(
    (question: Question) => question.subject === subject
  );
  quizState.id = getUniqueId();
  quizState.subject = subject;

  return {
    questions,
    quizState,
  };
}

// Function to get the user
function getUser() {
  return user;
}

// Function to update the quiz based on the operation
function updateQuiz(
  id: string,
  { operation, isCorrect }: { operation: string; isCorrect: boolean }
) {
  if (operation === "resume") {
    const questions = mockedQuestions.filter(
      (question: Question) => question.subject === quizState.subject
    );

    return {
      questions,
      quizState,
    };
  } else if (operation === "answer") {
    return selectQuestion(isCorrect);
  } else if (operation === "restart") {
    return restartQuiz();
  } else if (operation === "skip") {
    return skipQuestion();
  }
}

// Mapping of endpoints to functions
const ENDPOINTS_MAP: {
  [key: string]: (arg?: string | undefined) => unknown | void;
} = {
  "/api/user": () => getUser(),
  "/api/quiz/start": (subject: string | undefined) => initQuiz(subject),
  "/api/quiz/":
    (quizId: string | undefined) =>
    (props: { operation: string; isCorrect: boolean }) =>
      updateQuiz(quizId, props),
};

// Mock fetch function
export const mockFetch = async (url: string, data?: any) => {
  try {
    let endpointFunction: (arg?: string) => string | undefined | unknown;

    // Handle dynamic URLs for /api/quiz/{quizId}
    if (url !== "/api/quiz/start" && url.startsWith("/api/quiz/")) {
      const quizId = url.substring("/api/quiz/".length);
      endpointFunction = ENDPOINTS_MAP["/api/quiz/"](quizId);
    } else {
      endpointFunction = ENDPOINTS_MAP[url];
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    return endpointFunction(data);
  } catch (error) {
    throw new Error(`No se encontró ninguna ruta para ${url}`);
  }
};
