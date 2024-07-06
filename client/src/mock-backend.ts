import mockedQuestions from "./mock-data.json";

interface Question {
  id: string;
  question: string;
  options: { optionText: string; isCorrect: boolean }[];
  subject: string;
}

interface QuizState {
  id: string;
  status: string;
  score: number;
  currentQuestionId: number;
  subject: string;
}

interface User {
  userId: string;
  username: string;
  subjects: { name: string; quizzes: any[] }[];
}

let quizState: QuizState = {
  id: "",
  status: "in_progress",
  score: 0,
  currentQuestionId: 0,
  subject: "",
};

let user: User = {
  userId: "123",
  username: "brianmontero18",
  subjects: [
    { name: "react", quizzes: [] },
    { name: "css", quizzes: [] },
    { name: "html", quizzes: [] },
    { name: "javascript", quizzes: [] },
  ],
};

function getUniqueId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function selectQuestion(isCorrect: boolean): {
  questions: Question[];
  quizState: QuizState;
} {
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

function restartQuiz(): { questions: Question[]; quizState: QuizState } {
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

function skipQuestion(): { questions: Question[]; quizState: QuizState } {
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

function initQuiz(subject: string): {
  questions: Question[];
  quizState: QuizState;
} {
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

function getUser(): User {
  return user;
}

function updateQuiz(
  id: string,
  { operation, isCorrect }: { operation: string; isCorrect: boolean }
): { questions: Question[]; quizState: QuizState } {
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

const ENDPOINTS_MAP: { [key: string]: any } = {
  "/api/user": () => getUser(),
  "/api/quiz/start": (subject: string) => initQuiz(subject),
  "/api/quiz/": (quizId: string) => (props: any) => updateQuiz(quizId, props),
  "/api/questions/": (subject: string) => {
    const questions = mockedQuestions.filter(
      (question: Question) => question.subject === subject
    );
    return { questions };
  },
};

export const mockFetch = async (url: string, data: any): Promise<any> => {
  try {
    let endpointFunction;

    if (url.startsWith("/api/quiz/")) {
      const quizId = url.substring("/api/quiz/".length);
      endpointFunction = ENDPOINTS_MAP["/api/quiz/"](quizId);
    } else if (url.startsWith("/api/questions/")) {
      const subject = url.substring("/api/questions/".length);
      endpointFunction = ENDPOINTS_MAP["/api/questions/"](subject);
    } else {
      endpointFunction = ENDPOINTS_MAP[url];
    }

    if (!endpointFunction) {
      throw new Error(`No se encontró ninguna ruta para ${url}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    return endpointFunction(data);
  } catch (error) {
    throw new Error(`No se encontró ninguna ruta para ${url}`);
  }
};
