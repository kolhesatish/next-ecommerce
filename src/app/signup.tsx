"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", email, password);
    // TODO: Connect to Supabase / backend auth
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Login to your Techligence account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <span className="login-footer">
          Don’t have an account? <a href="/signup">Sign up</a>
        </span>
      </div>
    </div>
  );
}
