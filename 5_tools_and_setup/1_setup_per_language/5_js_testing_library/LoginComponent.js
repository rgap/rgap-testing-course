import React, { useState } from "react";

const USERS = [{ username: "admin", password: "admin123" }];

function isValidUsernameFormat(username) {
  return /^[a-zA-Z0-9]+$/.test(username) && username.length >= 3;
}

export default function LoginComponent({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!username) return setError("Username is required");
    if (!isValidUsernameFormat(username)) return setError("Invalid username format");

    const user = USERS.find(u => u.username === username);
    if (!user) return setError("User not found");

    if (user.password !== password) return setError("Incorrect password");

    setError("");
    onLogin({ status: "success", user: user.username });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" value={username} onChange={e => setUsername(e.target.value)} />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <button type="submit">Login</button>

      {error && <div role="alert">{error}</div>}
    </form>
  );
}
