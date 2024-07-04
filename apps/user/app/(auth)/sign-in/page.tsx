"use client";
import React, { useState } from 'react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('/login/logimage.svg')" }}>
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-xl md:text-4xl font-bold text-center">Empowering Youth Skill<br/> Training</h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">User Log In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 border"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" onChange={toggleShowPassword} />
                Show Password
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 ">
              Log In
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <button className="w-full text-black py-2 border border-blue-500 flex items-center justify-center">
            <img src='/login/googleic.svg' alt="Google logo" className="w-5 h-5 mr-2" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
