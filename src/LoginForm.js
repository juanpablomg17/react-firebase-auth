import React, { useState } from "react";
import { auth } from "./firabaseConfig";
import styles from "./LoginForm.module.css";
import TokenDisplay from './showToken.js';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        // Signed in
        const token = await userCredential.user.getIdToken();
        setToken(token);
        
      })
      .catch((error) => {
        console.log('holasss', error);
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>Log In</button>
      {error && <div className={styles.error}>{error}</div>}
      <TokenDisplay token={token} />
    </form>
  );
};

export default LoginForm;
