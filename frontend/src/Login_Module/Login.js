import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import '../style.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login attempt with:', email, password, role);

    if (!email || !password || !role) {
      setErrors({ ...errors, email: 'Please fill in all fields' });
      return;
    }

    try {
      const response = await axios.get(`/admin/users?email=${email}&password=${password}&role=${role}`);
      console.log('Response:', response);
      const users = response.data;
      const user = users.find((user) => user.email === email && user.role === role);

      
if (user) {
  console.log('User found', user);

  // Compare the input password with the stored hashed password
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (isValidPassword) {
    console.log('Password is valid');
    localStorage.setItem('user', JSON.stringify(user));
    if (user.role === 'Admin') {
      navigate('/admin/dashboard', { replace: true });
    } else if (user.role === 'Recruiter') {
      navigate('/recruiter/dashboard', { replace: true });
    } else if (user.role === 'Job Seeker') {
      navigate('/jobseeker/dashboard', { replace: true });
    }
  } else {
    console.log('Password is invalid');
    setErrors({ ...errors, password: 'Invalid password' });
  }
}
    } catch (error) {
      console.error('API request failed', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <select
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Recruiter">Recruiter</option>
              <option value="Job Seeker">Job Seeker</option>
            </select>
          </div>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <p className="text-sm text-gray-700 mt-4">
            Don't have an account? <a href="/register" className="text-blue-500 hover:text-blue-700">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;