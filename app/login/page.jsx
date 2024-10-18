"use client";

import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { blue } from '@mui/material/colors';

const login = () => {
  const [isSignIn, setisSignIn] = useState(false);
  const [signIn, setSignIn] = useState("Sign In");
  const [signUp, setSignUp] = useState("Sign Up");
  const [signUpDescription, setSignUpDesciption] = useState("Don’t have an account?");

  const toSignUpMode = () => {
    setSignIn((prevtext) => (prevtext === "Sign In" ? "Sign Up" : "Sign In"));
    setSignUp((prevtext) => (prevtext === "Sign In" ? "Sign Up" : "Sign In"));
    setisSignIn((prev) => (!prev));
    setSignUpDesciption((prevtext) => (prevtext === "Don’t have an account?" ? "Already have an account?" : "Don’t have an account?"));
  }

  return (
    <div>
      <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-xl p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center">{signIn}</h2>
        <p className="text-sm text-center text-gray-600">
        Use your email and password to sign in
        </p>

        <form className="mt-4 space-y-4">
        <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
            EMAIL ADDRESS
            </label>
            <input
            type="email"
            placeholder="user@gmail.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
            />
        </div>

        <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
            PASSWORD
            </label>
            <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
            />
        </div>

        {!isSignIn ? <div></div> : (
          <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
          CONFIRM PASSWORD
          </label>
          <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
          />
      </div>)}

        <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-800"
        >
            {signIn}
        </button>
        </form>

        <p className="text-sm text-center text-gray-500">
        {signUpDescription}{' '}
        <button 
        className={`font-medium text-gray-800 hover:underline  ${
          isSignIn ? ("text-blue-400") : ("text-red-400") }
        }`}
        onClick={toSignUpMode}
        >
            {signUp}
        </button>
        </p>
    </div>
    </div>
    </div>
  )
}

export default login
