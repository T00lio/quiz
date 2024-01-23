const Home = () => {
  const handleClick = () => {
    window.open("http://localhost:5000/auth/google", "_self");
    console.log("Button was clicked!");
  };
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
      <button onClick={handleClick}>Google</button>
    </div>
  );
};

export default Home;
