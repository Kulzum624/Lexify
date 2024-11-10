import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {
  const [roomCode, setRoomCode] = useState("")
  const [userType, setUserType] = useState('');

  const navigate = useNavigate();


  const isLoggedIn = async () => {
    try {
        const res = await fetch('/userType', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        if (res.status === 200) {
            const result = await res.json();
            setUserType(result.userType);
        }
    } catch (error) {
        console.log(error);
        setUserType("");
    }
}

useEffect(() => {
    isLoggedIn();
}, []);


  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    if(userType === "lawyer" || userType === "admin" )
    navigate(`/room/${roomCode}`)
    else if(userType === "user" ){
    navigate(`/user/lawyer-feedback`)
    navigate(`/room/${roomCode}`)}
    else
    navigate(`/unauthorized`)
    
  }

  return (
    <div className="bg-gray-700">
      <form onSubmit={handleFormSubmit}>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
              className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Enter Room Code</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                    <div className="relative">
                      <input
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        type="text" required
                        placeholder='Enter Room Code'
                        id="room" name="room"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />  
                      <label htmlFor="room" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Room Code</label>
                    </div>

                    <div className="relative">
                      <button
                        type='submit'
                        className="bg-gray-600  hover:bg-black text-white rounded-md px-2 py-1">Enter Room</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form >


    </div >
  );
}

export default JoinRoom;