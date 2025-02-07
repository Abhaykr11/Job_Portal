import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([]);
  const [loginStatus, setLoginStatus] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/admin/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setConsoleOutput(JSON.stringify(data, null, 2));
      });
  }, []);

  const handleLogin = () => {
    if (email && password && role) {
      const user = users.find(
        (user) =>
          user.email === email &&
          user.password === password &&
          user.role === role
      );
      if (user) {
        setLoginStatus(true);
        setConsoleOutput(
          `Login successful! User: ${JSON.stringify(user, null, 2)}`
        );
        if (role === "Admin") {
          navigate("/admin/dashboard");
        } else if (role === "Job Seeker") {
          navigate("/job-seeker/dashboard");
        } else if (role === "Recruiter") {
          navigate("/recruiter/dashboard");
        }
      } else {
        setLoginStatus(false);
        setConsoleOutput("Login failed!");
      }
    } else {
      setConsoleOutput("Please enter all fields!");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Job Seeker">Job Seeker</option>
        <option value="Recruiter">Recruiter</option>
      </select>
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      {loginStatus === true ? (
        <p>Login Successful!</p>
      ) : loginStatus === false ? (
        <p>Login Failed!</p>
      ) : (
        <></>
      )}
      <h2>Console Output:</h2>
      <pre>{consoleOutput}</pre>
    </div>
  );
}

export default Login;
