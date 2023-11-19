import logo from "/react.svg";
import "./Header.css";

function Header() {
  return (
    <header className="container">
      <div className="col">
        <h1>
          100 React Questions{" "}
          <img className="App-logo" src={logo} alt="react logo"></img>
        </h1>

        <p className="header-text">
          This app will help you memorize the top 100 react interview questions
        </p>
      </div>

      <div className="col">
        <h3 className="dashboard">Score: 10000</h3>
        <h3 className="dashboard">Question: 10000</h3>
        <h3 className="dashboard">Time: 10000</h3>
        <h3 className="dashboard">user</h3>
      </div>
    </header>
  );
}

export default Header;
