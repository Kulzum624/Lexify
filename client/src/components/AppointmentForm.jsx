import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AppointmentForm = () => {
  const { lawyer_email, lawyer_name } = useParams();
  const [lawyer_id, setLawyer] = useState([]);
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFreeSlots = async () => {
      try {
        const res = await fetch("/id-l", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lawyer_email
          }),
        });

        if (res.status === 200) {
          const result = await res.json();
          setLawyer(result.lawyer_id);
          const response = await fetch(`/lawyer/freeslot/${result.lawyer_id}`);
          const data = await response.json();
          setSlots(data);
        } else if (res.status === 404) {
          window.alert("Not Found");
        } else {
          throw new Error("No Available Slots");
        }
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFreeSlots();
  }, [lawyer_email]);

  const filteredSlots = slots.filter(slot => slot.day === selectedDay);

  const handleSubmit = async (day, slot) => {
    try {
      const res = await fetch("/appointment-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lawyer_id,
          lawyer_email,
          lawyer_name,
          day,
          slot,
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
        navigate(`/user/view-lawyer`);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid MAil',
          icon: 'error',
          confirmButtonText: 'ok'
        })
        // window.alert("Invalid Mail");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto my-5 px-6 py-10 shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold mb-6">Available Days and Slots</h2>
      <div>
        <label htmlFor="day" className="block text-lg font-medium text-gray-700">
          Select Day:
        </label>
        <select
          id="day"
          name="day"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="">Select a Day</option>
          {Array.from(new Set(slots.map(slot => slot.day))).map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {filteredSlots.map((slot) => (
          <div key={slot.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <p className="text-gray-600">
              <strong className="font-bold">Day:</strong> {slot.day} - {' '}
              <strong className="font-bold">Free Slot:</strong> {slot.slot}
            </p>
            <button
              onClick={() => handleSubmit(slot.day, slot.slot)}
              className="mt-4 bg-gray-700 text-white hover:bg-gray-400 font-bold py-2 px-4 rounded"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentForm;
