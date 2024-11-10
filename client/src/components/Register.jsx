import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cnic: "",
    contact: "",
    address: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const validateName = () => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(user.name);
  };

  const validateAddress = () => {
    const regex = /^[a-zA-Z0-9\s#&',.\-/]+$/;
    return regex.test(user.address);
  };

  const validatePassword = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(user.password);
  };

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {};
    if (!validateName()) {
      errors.name =
        "Please enter a valid name (only alphabets and spaces allowed).";
    }
    if (!validateAddress()) {
      errors.address =
        "Please enter a valid address.Valid Char{#,&,',.,-,/}";
    }
    if (!validatePassword()) {
      errors.password = "8 Characters having numbers and words";
    }
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const { name, email, password, cnic, contact, address } = user;
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          cnic,
          address,
          contact,
          password,
        }),
      });
      if(res.status === 401)
      {
        Swal.fire({
          title: 'Error!',
          text: 'Email domain not allowed',
          icon: 'error',
          confirmButtonText: 'Oh!'
        })
        // window.alert(" Email domain not allowed");
      }
      else if (res.status === 400 || !res) {
       
        Swal.fire({
          title: 'Error!',
          text: 'Already Used Details',
          icon: 'error',
          confirmButtonText: 'Oh!'
        })
        // window.alert("Already Used Details");
        setValidationErrors({});
      } else {
        Swal.fire({
          title: 'Success',
          text: 'Registered Successfully,Verify OTP',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        // window.alert("Registered Successfully,Verify OTP");
        navigate(`/verify-otp/${email}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-5 mx-auto px-9 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col justify-center items-center text-white form p-5">
            <h1 className="text-4xl font-bold mb-4">Hi, Friend</h1>
            <p className="text-lg text-center">Enter Your Details To Register</p>
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
            <h1 className="text-2xl font-bold mb-5">Registration</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                  required
                />
                {validationErrors.name && <div className="text-red-500">{validationErrors.name}</div>}
              </div>
              <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="abc@gmail.com"
                  pattern="[\w\.-]+@(gmail\.com|cfd\.nu\.edu\.pk|yahoo\.com)"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  required
                />
               
                <div id="emailHelp" className="text-gray-500 text-sm">We'll never share your email with anyone else.</div>
              </div>
              <div>
                <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">CNIC</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="cnic"
                  name="cnic"
                  placeholder="*****-*******-*"
                  pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                  value={user.cnic}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Full address</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="address"
                  name="address"
                  value={user.address}
                  onChange={handleInput}
                  required
                />
                {validationErrors.address && <div className="text-red-500">{validationErrors.address}</div>}
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="contact"
                  name="contact"
                  placeholder="****-*******"
                  pattern="[0-9]{4}-[0-9]{7}"
                  value={user.contact}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  required
                />
                {validationErrors.password && <div className="text-red-500">{validationErrors.password}</div>}
              </div>
              <button
                type="submit"
                className="mt-4 w-full inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

