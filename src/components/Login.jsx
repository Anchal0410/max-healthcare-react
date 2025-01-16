import React, { useState } from "react";
import image from "../assets/login-img.svg";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full login">
      {/* Left Section - Login Form */}
      <div className="w-full md:w-1/2 bg-customTeal p-6 md:p-16 flex flex-col justify-center min-h-[50vh] md:min-h-screen">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-6 md:mb-10">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 text-base md:text-lg bg-white/90 border-0 focus:outline-none focus:ring-2 focus:ring-white "
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 text-base md:text-lg bg-white/90 border-0 focus:outline-none focus:ring-2 focus:ring-white "
              />
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="button"
                className="text-blue-900 hover:text-blue-800 font-semibold text-base md:text-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section - Doctor Illustration */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-0">
        <div className="w-full max-w-2xl">
          <div className="relative">
            <div className="px-4 md:px-10 flex items-center justify-center">
              <div className="w-full h-full">
                <img
                  src={image}
                  alt="Doctor illustration"
                  className="w-full h-auto object-contain max-h-[50vh] md:max-h-screen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
