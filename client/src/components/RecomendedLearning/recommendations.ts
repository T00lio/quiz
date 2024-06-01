interface Recommendation {
  name: string;
  url: string;
  image: string;
  description: string;
}

interface Recommendations {
  [key: string]: Recommendation[];
}

export const recommendations: Recommendations = {
  React: [
    {
      name: "React Official Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The official React documentation is a great place to start learning React. It covers everything from the basics to advanced topics.",
    },
    {
      name: "React Tutorial - W3Schools",
      url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "W3Schools has a great React tutorial that covers the basics of React. It's a good place to start if you're new to React.",
    },
    {
      name: "React Tutorial - freeCodeCamp",
      url: "https://www.freecodecamp.org/learn/front-end-libraries/react/",
      image:
        "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "freeCodeCamp has a great React tutorial that covers the basics of React. It's a good place to start if you're new to React.",
    },
  ],
  CSS: [
    {
      name: "CSS Tricks",
      url: "https://css-tricks.com/",
      image:
        "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "CSS Tricks is a great resource for learning CSS. It has tutorials, articles, and examples to help you learn CSS.",
    },
    {
      name: "MDN Web Docs - CSS",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1kbiUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "MDN Web Docs has a great CSS section that covers everything from the basics to advanced topics.",
    },
    {
      name: "CSS Tutorial - W3Schools",
      url: "https://www.w3schools.com/css/",
      image:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3NzfGVufDB8fDB8fHww",
      description:
        "W3Schools has a great CSS tutorial that covers the basics of CSS. It's a good place to start if you're new to CSS.",
    },
  ],
  Javascript: [
    {
      name: "JavaScript Tutorial - W3Schools",
      url: "https://www.w3schools.com/js/",
      image:
        "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "W3Schools has a great JavaScript tutorial that covers the basics of JavaScript. It's a good place to start if you're new to JavaScript.",
    },
    {
      name: "MDN Web Docs - JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      image:
        "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "MDN Web Docs has a great JavaScript section that covers everything from the basics to advanced topics.",
    },
    {
      name: "JavaScript.info",
      url: "https://javascript.info/",
      image:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "JavaScript.info is a great resource for learning JavaScript.",
    },
  ],
};
