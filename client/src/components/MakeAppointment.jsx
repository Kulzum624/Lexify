/*Currently Not Used Because I changed the flow of operations*/ 
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const MakeAppointment = (props) => {
  const navigate = useNavigate();
  const { lawyer_email } = useParams();
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [date, setDate] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/appointment-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_email: userEmail,
          lawyer_email,
          date,
          name,
        }),
      });

      if (res.status === 200) {
        // window.alert("Request Sent");
        Swal.fire({
          title: 'Error!',
          text: 'Request Sent',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigate(`/`);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid Mail',
          icon: 'error',
          confirmButtonText: 'Oh!'
        })
        // window.alert("Invalid Mail");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
              className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Book Appointment</h1>
                  <h4 className="font-semibold">Lawyer will contact you shortly, Thanks</h4>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder='Enter name'
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" />
                      <label
                        htmlFor="name"
                        className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${name ? '': 'peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2'} transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}>
                        Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        id="user_email"
                        aria-describedby="emailHelp"
                        placeholder="abc@gmail.com"
                        name="user_email"
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" />
                      <label
                        htmlFor="user_email"
                        className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${userEmail ? '': 'peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2'} transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}>
                        Email
                      </label>
                    </div>

                    <div className="relative">
                      <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      />
                    </div>

                    <div className="relative">
                      <button
                        type='submit'
                        className="bg-gray-600  hover:bg-black text-white rounded-md px-2 py-1">Confirm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form >

    </div>
  )
};

export default MakeAppointment;
