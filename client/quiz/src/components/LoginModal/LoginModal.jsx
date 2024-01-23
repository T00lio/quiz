import "./LoginModal.css";

function LoginModal() {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Login</h2>
            <span className="close">&times;</span>
          </div>
          <div className="modal-body">
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
