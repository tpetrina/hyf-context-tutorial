import { useState } from "react";

export function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  function login() {
    onLogin(username);
  }

  return (
    <section className="nice-section">
      <h2>Login</h2>

      <label htmlFor="">
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <div>
        <button onClick={login}>Login</button>
      </div>
    </section>
  );
}
