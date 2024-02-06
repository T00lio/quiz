import { Link } from "react-router-dom";
import styles from "./Home.css";

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
    <div className="result">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome Back!</h1>
          <p className={styles.subtitle}>Sign in to continue to your account</p>
        </div>
        <div>
          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="username">
                Username
              </label>
              <input className={styles.input} id="username" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                className={styles.input}
                id="password"
                required
                type="password"
              />
            </div>
            <button className={styles.submitButton} type="submit">
              Sign In
            </button>
          </div>
          <separator className={styles.separator} />
          <div className={styles.socialButtons}>
            <button className={styles.googleButton} onClick={google}>
              Sign in with Google
            </button>
            <button className={styles.facebookButton} onClick={facebook}>
              Sign in with Facebook
            </button>
            <button className={styles.twitterButton} onClick={github}>
              Sign in with Github
            </button>
            <div className={styles.signupLink}>
              Don't have an account?
              <Link className={styles.signupText} href="#">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
