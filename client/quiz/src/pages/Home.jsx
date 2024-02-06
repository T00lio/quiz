const Home = () => {
  const google = () => {
    window.open("http://localhost:3004/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:3004/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:3004/auth/facebook", "_self");
  };

  return (
    <div className="result" style={{ marginTop: "10rem" }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
      <button type="button" onClick={google}>
        {" "}
        Google
      </button>
      <button type="button" onClick={github}>
        {" "}
        Github
      </button>
      <button type="button" onClick={facebook}>
        {" "}
        Facebook
      </button>
    </div>
  );
};

export default Home;
