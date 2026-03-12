import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    // Example recruiter accounts
    const recruiters = [
      { username: "recruiter1", password: "1234" },
      { username: "recruiter2", password: "abcd" },
      { username: "admin", password: "admin123" }
    ];

    const validUser = recruiters.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>FairHire AI</h1>

      <h2>Recruiter Login</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default LoginPage;