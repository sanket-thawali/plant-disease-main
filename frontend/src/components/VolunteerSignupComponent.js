import React, { useState } from "react";
import "../css/Auth.css";

import { useSignup } from "../hooks/useSignup";

const VolunteerSignupComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, "volunteer");
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>

      <h2> Sign Up</h2>
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
      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default VolunteerSignupComponent;
