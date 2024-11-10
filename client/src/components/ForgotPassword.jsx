import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.status === 200) {
        Swal.fire({
          title: 'Success',
          text: 'Password reset instructions sent to your email',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // window.alert("Password reset instructions sent to your email.");
        navigate("/login");
      } else if (res.status === 404) {
        
        Swal.fire({
          title: 'Error!',
          text: 'User not found. Please check your email and try again.',
          icon: 'error',
          confirmButtonText: 'ok'
        })
        // window.alert("User not found. Please check your email and try again.");
      } else {
       
        Swal.fire({
          title: 'Error!',
          text: 'Password reset failed. Please try again later.',
          icon: 'error',
          confirmButtonText: 'ok'
        })
        // window.alert("Password reset failed. Please try again later.");
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
            <h1 className="text-4xl font-bold mb-4">Forgot Password</h1>
            <p className="text-lg text-center mb-9">Enter your email to reset the password</p>
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
            <h1 className="text-2xl font-bold mb-5">Reset Password</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <div id="emailHelp" className="text-sm text-gray-500">We'll send password reset instructions to this email.</div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
