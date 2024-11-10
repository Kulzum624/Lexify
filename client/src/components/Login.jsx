import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {
 // const history = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  //const [notification, setNotification] = useState(null);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    try {
      const res = await fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      })
      if (res.status === 400 || !res) {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid Credentials or User Not Verified',
          icon: 'error',
          confirmButtonText: 'Oh!'
        })
        // window.alert("Invalid Credentials or User Not Verified")
      } else {
        const result = await res.json();

        console.log("RESULT:", result.userType);
        

        // switch (result.userType) {
        //   case "user":
        //     history('/user/dashboard');
        //     break;
        //   case "admin":
        //     history('/admin/dashboard');
        //     break;
        //   case "lawyer":
        //     history(`/lawyer/dashboard/${email}`);
        //     break;
        //   default:
        //     history('/');
        // }
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div><div className="container shadow my-5 mx-auto px-9 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="form flex flex-col justify-center items-center text-white p-5">
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-lg text-center mb-7">Enter Your Credentials To Login</p>
          <h5 className="mb-9 font-bold">OR</h5>
          <nav>
            <Link
              to="/register"
              className="bg-form hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-lg transition-colors duration-300 ease-in-out hover:text-black"
            >
              Register
            </Link>
          </nav>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-5">LOGIN</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
              <p className="mt-2 text-sm text-gray-500" id="emailHelp">We'll never share your email with anyone else.</p>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <Link to="/forgot-password" className="text-blue-500 mt-2 block">Forgot Password?</Link>
            <button
              type="submit"
              className="mt-4 w-full inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
