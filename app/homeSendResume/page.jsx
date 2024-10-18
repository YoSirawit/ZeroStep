"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';


const Progression = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-4xl mx-auto mt-10">
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-24 h-1 bg-blue-500"></div>
      </div>

      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        </div>
        <div className="w-24 h-1 bg-gray-300"></div>
      </div>

      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
        <div className="w-24 h-1 bg-gray-300"></div>
      </div>

      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

function HomeSendResumePage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !address || !phonenumber) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    setError("");
    
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-5">
        <h2>ข้อมูลส่วนตัว</h2>
        <hr className="my-3" />
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <label htmlFor="Name-Surname">ชื่อ-นามสกุล :</label>
          <div className="flex space-x-4">
            
            <input
              onChange={(e) => setName(e.target.value)}
              className="block bg-gray-200 py-2 my-2 rounded-md w-full"
              type="text"
              placeholder="Name"
              value={name}
            />
            
            <input
              onChange={(e) => setSurname(e.target.value)}
              className="block bg-gray-200 py-2 my-2 rounded-md w-full"
              type="text"
              placeholder="Surname"
              value={surname}
            />
          </div>
          <label htmlFor='email'>Email :</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="block bg-gray-200 py-2 my-2 rounded-md w-full"
            type="email"
            placeholder="Email"
            value={email}
          />
          <label htmlFor='phonenumber'>เบอร์โทรศัพท์ :</label>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block bg-gray-200 py-2 my-2 rounded-md w-full"
            type="tel"
            placeholder="Phone Number"
            value={email}
          />
          <label htmlFor='Address'>ที่อยู่ :</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="block bg-gray-200 py-2 my-2 rounded-md w-full"
            type="text"
            placeholder="Address"
            value={address}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomeSendResumePage;
