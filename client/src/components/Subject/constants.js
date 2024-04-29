import ReactJSLogo from "../../assets/subject-logos/React.png";
import CSSLogo from "../../assets/subject-logos/CSS.png";
import HTMLLogo from "../../assets/subject-logos/HTML.png";
import JSLogo from "../../assets/subject-logos/JavaScript.png";

export const SUBJECT_DESCRIPTIONS_MAP = {
  react: {
    displayName: "React",
    logo: ReactJSLogo,
    backgroundColorLogo: "bg-white",
    description: `Whether you're a beginner seeking to solidify your understanding or an experienced developer
  aiming to brush up on the latest in React, this quiz offers valuable insights and a practical
  review. Challenge yourself, identify areas for improvement, and step into your interview with
  confidence. From fundamental concepts to advanced techniques, our questions touch on JSX,
  components, state management, lifecycle methods, hooks, performance optimization, and best
  practices!`,
  },
  css: {
    displayName: "CSS",
    logo: CSSLogo,
    backgroundColorLogo: "bg-green-500",
    description: `Dive into a variety of questions encompassing selectors, box model, layout techniques,
  responsiveness, animations, preprocessors, and CSS best practices. Whether you're a novice eager
  to establish a solid foundation or a seasoned professional aiming to refresh your knowledge,
  this challenge will test your understanding, highlight areas needing reinforcement, and enhance
  your problem-solving skills.`,
  },
  html: {
    displayName: "HTML",
    logo: HTMLLogo,
    backgroundColorLogo: "bg-violet-500",
    description: `This quiz is thoughtfully designed to encompass a wide range of HTML topics, ensuring a thorough
  preparation for any web developer interview. Engage with questions spanning from basic tags to
  complex structures, semantic HTML, accessibility standards, SEO best practices, forms,
  multimedia integration, and the interplay between HTML and other web technologies. Ideal for
  beginners seeking a robust foundation or experienced developers aiming for a refresher, this
  challenge helps you gauge your knowledge, pinpoint improvement areas, and boost your technical
  acumen`,
  },
  javascript: {
    displayName: "Javascript",
    logo: JSLogo,
    backgroundColorLogo: "bg-pink-500",
    description: `From fundamental syntax and operators to advanced concepts like closures, prototypes, event
  delegation, and asynchronous programming, we've got you covered. The quiz also delves into ES6
  features, error handling, performance optimization, and testing, providing a comprehensive
  review for developers of all levels. Whether you're a novice aiming to solidify your basics or
  an experienced coder looking to polish your expertise`,
  },
};
