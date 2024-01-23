import logo from "/react.svg";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <h1
        style={{
          textAlign: "center",
          alignItems: "center",
          fontWeight: "900",
          justifyContent: "center",
          display: "flex",
          fontSize: "4rem",
        }}
        className="App-title"
      >
        100 React Questions{" "}
        <img
          className="App-logo"
          src={logo}
          alt="react logo"
          style={{ width: "40px", height: "40px" }}
        ></img>
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "500",
        }}
        className="App-intro"
      >
        This app will help you memorize the top 100 interview questions in
        React, HTML, CSS & Javascript
      </p>{" "}
    </header>
  );
}

export default Header;
