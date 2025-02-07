import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([]);
  const [loginStatus, setLoginStatus] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
          navigate("/admin-dashboard");
        } else if (role === "Job Seeker") {
          navigate("/job-seeker-dashboard");
        } else if (role === "Recruiter") {
          navigate("/recruiter-dashboard");
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
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Login</h1>
      </header>
      <main className="flex-1 p-4">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="mt-2">
                <input
                  type="checkbox"
                  id="show-password"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                <label className="text-gray-700 text-sm" htmlFor="show-password">
                  Show Password
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Role
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Recruiter">Recruiter</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <Link to="register">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Register
              </button>
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          {loginStatus === true ? (
            <p className="text-green-500 font-bold mt-4">
              Login Successful!
            </p>
          ) : loginStatus === false ? (
            <p className="text-red-500 font-bold mt-4">
              Login Failed!
            </p>
          ) : (
            <></>
          )}
        </form>
      </main>
    </div>
  );
}

export default Login;