import React, { useState } from "react";
import "../css/Auth.css";

import { useLogin } from "../hooks/useLogin";

const VolunteerLoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password, "volunteer");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>

      <h2>Login</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default VolunteerLoginComponent;
