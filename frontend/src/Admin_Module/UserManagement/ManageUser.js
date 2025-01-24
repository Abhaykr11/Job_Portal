import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../style.css';

function ManageUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleUpdateClick = (user) => {
    setIsUpdateMode(true);
    setSelectedUser(user);
    setEmail(user.email);
    setName(user.name);
    setPassword(user.password);
    setRole(user.role);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/admin/users/${selectedUser._id}`, {
        name,
        email,
        password,
        role,
      });
      console.log(response.data);
      setUsers(users.map(user => user._id === selectedUser._id ? response.data : user));
      setIsUpdateMode(false);
      setSelectedUser(null);
      setEmail('');
      setName('');
      setPassword('');
      setRole('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = async (user) => {
    try {
      const response = await axios.delete(`/admin/users/${user._id}`);
      console.log(response.data);
      setUsers(users.filter(u => u._id !== user._id));
    } catch (error) {
      console.error(error);
      alert('Error deleting user: ' + error.message);
    }
  };
  
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Manage User</h1>
      </header>
      <main className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">Existing Users:</h2>
        {users.length > 0 ? (
          <div className="border border-gray-200 rounded p-4">
            <ul>
              {users.map((user) => (
                <li key={user._id} className="flex justify-between mb-2">
                  {user.name} ({user.email}) - {user.role}
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleUpdateClick(user)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDeleteClick(user)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No users found.</p>
        )}
        {isUpdateMode && (
          <form onSubmit={handleSubmitUpdate} className="w-full max-w-lg mt-4">
            <h2 className="text-xl font-bold mb-4">Update User:</h2>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="update-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Role
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update User
            </button>
          </div>
        </form>
        )}
      </main>
    </div>
  );
}

export default ManageUser;