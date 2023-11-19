import logo from "/react.svg";
import "./Header.css";

function Header() {
  return (
    <header className="container">
      <div className="col">
        <h1
          style={{
            textAlign: "center",
            alignItems: "center",
            fontWeight: "700",
            justifyContent: "center",
            display: "flex",
            fontSize: "4rem",
          }}
        >
          100 React Question{" "}
          <img
            className="App-logo"
            src={logo}
            alt="react logo"
            style={{ width: "80px", height: "80px" }}
          ></img>
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "300",
          }}
        >
          This app will help you memorize the top 100 react interview questions
        </p>
      </div>

      <div className="col">
        <h3>Score: 10000</h3>
        <h3>Question: 10000</h3>
        <h3>Time: 10000</h3>
        <h3>user</h3>
      </div>
    </header>
  );
}

export default Header;
