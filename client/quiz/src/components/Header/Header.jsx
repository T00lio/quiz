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
    </header>
  );
}

export default Header;
