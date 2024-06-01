import ReactLogo from "../../assets/subject-logos/React.png";
import CSSLogo from "../../assets/subject-logos/CSS.png";
import JSLogo from "../../assets/subject-logos/JavaScript.png";
import HTMLlogo from "../../assets/subject-logos/HTML.png";

const quizData = [
  {
    name: "React",
    logo: ReactLogo,
    averageScore: "90%",
    records: ["100%", "90%", "80%", "70%"],
  },
  {
    name: "CSS",
    logo: CSSLogo,
    averageScore: "80%",
    records: ["100%", "90%", "80%", "70%"],
  },
  {
    name: "JavaScript",
    logo: JSLogo,
    averageScore: "70%",
    records: ["100%", "90%", "80%", "70%"],
  },
  {
    name: "HTML",
    logo: HTMLlogo,
    averageScore: "60%",
    records: ["100%", "90%", "80%", "70%"],
  },
];

export default function ProfilePageQuizReport() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-4 bg-white rounded-lg w-full md:grid-cols-2 lg:grid-cols-4 mb-5">
      {quizData.map((quiz, index) => (
        <div key={index} className="bg-gray-100 rounded-xl border p-4 mb-4">
          <div className="flex flex-col items-center mb-4">
            <img
              src={quiz.logo}
              className="mb-2 w-full h-32 object-contain"
              alt={quiz.name}
              style={{ maxWidth: "50px" }}
            />
            <p className="font-bold">{quiz.name}</p>
          </div>
          <div className="mb-4">
            <p>Average score: {quiz.averageScore}</p>
            <a href="#" className="text-blue-500 underline">
              Try again
            </a>
          </div>
          <div>
            <p>Last Records</p>
            <ol className="list-disc ml-5">
              {quiz.records.map((record, recordIndex) => (
                <li key={recordIndex}>{record}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
}
