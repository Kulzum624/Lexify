import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const MakeAppointment = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [lawyerEmail, setLawyerEmail] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch("/confirm-appointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_email: userEmail,
                    lawyer_email: lawyerEmail,
                    date,
                    name,
                    code,
                    time,
                }),
            });

            if (res.status === 200) {
                Swal.fire({
                    title: 'Success',
                    text: 'Request sent',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
                // window.alert("Request Sent");
                navigate(`/`);
            } else {
                // window.alert("Invalid Mail");
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid Mail',
                    icon: 'error',
                    confirmButtonText: 'ok'
                  })
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
                                    <h1 className="text-2xl font-semibold">Confirm Appointment</h1>
                                    <h4 className="font-semibold">Thanks for your time</h4>
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
                                                className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${name ? '' : 'peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2'} transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm` }>
                                                Your Name
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <input
                                                id="lawyer_email"
                                                placeholder="abc@gmail.com"
                                                name="lawyer_email"
                                                required
                                                value={lawyerEmail}
                                                onChange={(e) => setLawyerEmail(e.target.value)}
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" />
                                            <label
                                                htmlFor="lawyer_email"
                                                className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${lawyerEmail ? '' : 'peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2'} transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}>
                                                Lawyer's Email
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <input
                                                id="user_email"
                                                placeholder="abc@gmail.com"
                                                name="user_email"
                                                required
                                                value={userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)}
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" />
                                            <label
                                                htmlFor="user_email"
                                                className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${userEmail ? '' : 'peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2'} transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}>
                                                User's Email
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <input
                                                id="code"
                                                name="code"
                                                placeholder="code"
                                                required
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" />
                                            <label
                                                htmlFor="code"
                                                className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${code ? '' : 'peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2'} transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}>
                                                Meeting Code
                                            </label>
                                        </div>

                                        <div className="relative">
                                        
                                            <DatePicker
                                                selected={date}
                                                onChange={(date) => setDate(date)}
                                                required
                                                placeholderText="Select Date"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            />
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="time"
                                                id="time"
                                                name="time"
                                                value={time}
                                                required
                                                onChange={(e) => setTime(e.target.value)}
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" />
                                            <label
                                                htmlFor="time"
                                                className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${time ? '' : 'peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2'} transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}>
                                                Meeting Time
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <button
                                                type='submit'
                                                className="bg-gray-600 hover:bg-black text-white rounded-md px-2 py-1">Confirm</button>
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
