import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VerifyOtp2 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpInput = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      if (res.status === 200) {
        window.alert("Email verified. You can now login.");
        navigate("/login");
      } else {
        window.alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-5 mx-auto px-9 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col justify-center items-center text-white form p-5">
            <h1 className="text-4xl font-bold mb-4">Hi, Friend</h1>
            <p className="text-lg text-center">Enter OTP To Verify</p>
            <h5 className="mb-4">OR</h5>
            <nav>
              <Link
                to="/login"
                className="bg-form hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-lg transition-colors duration-300 ease-in-out hover:text-black"
              >
                Login
              </Link>
            </nav>
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Verify OTP</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="abc@gmail.com"
                  name="email"
                  value={email}
                  onChange={handleEmailInput}
                  required
                />
                <div id="emailHelp" className="text-sm text-gray-500">We'll never share your email with anyone else.</div>
              </div>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={handleOtpInput}
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp2;

