import mockedQuestions from "./mock-data.json";

let quizState = {
  id: "",
  status: "in_progress",
  score: 0,
  currentQuestionId: 0,
  subject: "",
};

let user = {
  userId: "123",
  username: "brianmontero18",
  subjects: [
    {
      name: "react",
      quizzes: [],
    },
    {
      name: "css",
      quizzes: [],
    },
    {
      name: "html",
      quizzes: [],
    },
    {
      name: "javascript",
      quizzes: [],
    },
  ],
};

function getUniqueId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function selectQuestion(isCorrect) {
  const questions = mockedQuestions.filter((question) => question.subject === quizState.subject);
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

function restartQuiz() {
  const questions = mockedQuestions.filter((question) => question.subject === quizState.subject);
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

function skipQuestion() {
  const questions = mockedQuestions.filter((question) => question.subject === quizState.subject);
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

function initQuiz(subject) {
  const questions = mockedQuestions.filter((question) => question.subject === subject);
  quizState.id = getUniqueId();
  quizState.subject = subject;

  return {
    questions,
    quizState,
  };
}

function getUser() {
  return user;
}

function updateQuiz(id, { operation, isCorrect }) {
  if (operation === "resume") {
    const questions = mockedQuestions.filter((question) => question.subject === quizState.subject);

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

const ENDPOINTS_MAP = {
  "/api/user": () => getUser(),
  "/api/quiz/start": (subject) => initQuiz(subject),
  "/api/quiz/": (quizId) => (props) => updateQuiz(quizId, props),
};

export const mockFetch = async (url, data) => {
  try {
    let endpointFunction;

    // Manejo de la URLs dinámicas para /api/quiz/{quizId}
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
