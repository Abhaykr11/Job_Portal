import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [yearOfPassing, setYearOfPassing] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [yearOfExperience, setYearOfExperience] = useState('');

  const id = '678906190d9f2438109d1d48'; // Replace with the actual ID

  useEffect(() => {
    axios
      .get(`/user/profiles/${id}`)
      .then((response) => {
        const profile = response.data;
        setName(profile.name);
        setEmail(profile.email);
        setPassword(profile.password);
        setAddress(profile.personalDetails.address);
        setPhone(profile.personalDetails.phone);
        setDob(profile.personalDetails.dob);
        setDegree(profile.educationalDetails[0].degree);
        setInstitution(profile.educationalDetails[0].institution);
        setYearOfPassing(profile.educationalDetails[0].yearOfPassing);
        setCompany(profile.professionalDetails[0].company);
        setDesignation(profile.professionalDetails[0].designation);
        setYearOfExperience(profile.professionalDetails[0].yearOfExperience);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/user/profiles/${id}`, {
        name,
        email,
        password,
        personalDetails: {
          address,
          phone,
          dob,
        },
        educationalDetails: [
          {
            degree,
            institution,
            yearOfPassing,
          },
        ],
        professionalDetails: [
          {
            company,
            designation,
            yearOfExperience,
          },
        ],
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Edit Profile</h1>
      </header>
      <main className="flex-1 p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-4">
          <h2 className="text-xl font-bold mb-4">Personal Details</h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Name</label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Password</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Address</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Phone</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Date of Birth</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <h2 className="text-xl font-bold mb-4">Educational Details</h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Degree</label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
                type="text"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Institution</label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
                type="text"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Year of Passing</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              type="number"
              value={yearOfPassing}
              onChange={(e) => setYearOfPassing(e.target.value)}
            />
          </div>

          <h2 className="text-xl font-bold mb-4">Professional Details</h2>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Company</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Designation</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Years of Experience</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none"
              type="number"
              value={yearOfExperience}
              onChange={(e) => setYearOfExperience(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EditProfile;
