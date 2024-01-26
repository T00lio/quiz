const Home = () => {
  const handleClick = () => {
    window.open("http://localhost:3004/auth/google", "_self");
    console.log("Button was clicked!");
  };
  return (
    <div className="result" style={{ marginTop: "10rem" }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
      <button onClick={handleClick}>Google</button>
    </div>
  );
};

export default Home;
