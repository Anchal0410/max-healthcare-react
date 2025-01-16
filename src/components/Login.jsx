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
    <div className="flex h-screen w-full login">
      {/* Left Section - Login Form */}
      <div className="w-1/2 bg-customTeal p-16 flex flex-col justify-center">
        <div className="max-w-md w-full">
          <h1 className="text-white text-4xl font-bold mb-10">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 text-lg  bg-white/90 border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 text-lg   bg-white/90 border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="text-blue-900 hover:text-blue-800 font-semibold text-lg  "
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section - Doctor Illustration */}
      <div className=" bg-white flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="relative">
            {/* Placeholder for the doctor illustration */}
            <div className=" px-10 flex items-center justify-center">
              <div className="w-full h-full">
                <img
                  src={image}
                  alt="Doctor illustration"
                  //   className="h-full w-full "
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
