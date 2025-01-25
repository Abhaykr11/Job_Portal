import React, { useState } from 'react';
import axios from 'axios';

function UploadResume() {
  const [resume, setResume] = useState({
    userId: '',
    name: '',
    email: '',
    phone: '',
    objective: '',
    education: [],
    workExperience: [],
    skills: [],
    achievements: [],
    cv: null,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResume({ ...resume, cv: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', resume.userId);
    formData.append('name', resume.name);
    formData.append('email', resume.email);
    formData.append('phone', resume.phone);
    formData.append('objective', resume.objective);
    formData.append('education', resume.education);
    formData.append('workExperience', resume.workExperience);
    formData.append('skills', resume.skills);
    formData.append('achievements', resume.achievements);
    formData.append('cv', resume.cv);

    try {
      const response = await axios.post('http://localhost:3000/user/resumes/upload-post', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Upload Resume</h1>
      </header>
      <main className="flex-1 p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-4">
          <h2 className="text-xl font-bold mb-4">Resume Information</h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                User ID
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="userId"
                value={resume.userId}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="name"
                value={resume.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                name="email"
                value={resume.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="phone"
                value={resume.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Objective
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="objective"
                value={resume.objective}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Upload Resume
            </label>
            <input
              className="block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              name="cv"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Upload Resume
            </button>
          </div>
        </form>
        <p className="text-green-500">{message}</p>
      </main>
    </div>
  );
}

export default UploadResume;