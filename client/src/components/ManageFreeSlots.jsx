import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
const ManageFreeSlots = () => {
  const [freeSlots, setFreeSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({ day: '', startHour: '', startMinute: '', endHour: '', endMinute: '' });
  const [days, setDays] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);

  useEffect(() => {
    fetchFreeSlots();
  }, []);

  const fetchFreeSlots = async () => {
    try {
      const res = await fetch('/lawyer/freeslots');
      if (res.ok) {
        const data = await res.json();
        setFreeSlots(data);
      } else {
        console.error('Failed to fetch free slots:', res.statusText);
      }
    } catch (error) {
      console.error('Error fetching free slots:', error);
    }
  };

  const addSlot = async () => {
    const { startHour, startMinute, endHour, endMinute } = newSlot;
    if (!newSlot.day) {
      console.error('Day must not be empty');
      Swal.fire({
        title: 'Error!',
        text: 'Day must not be empty',
        icon: 'error',
        confirmButtonText: 'Oh!'
      })
      // window.alert('Day must not be empty');
      return;
    }
  
    if (!startHour || !startMinute || !endHour || !endMinute) {
      Swal.fire({
        title: 'Error!',
        text: 'Time slots must not be empty',
        icon: 'error',
        confirmButtonText: 'Oh!'
      })
      console.error('Time slots must not be empty');
      // window.alert('Time slots must not be empty');
      return;
    }
    if (parseInt(endHour) < parseInt(startHour) || (parseInt(endHour) === parseInt(startHour) && parseInt(endMinute) <= parseInt(startMinute))) {
      Swal.fire({
        title: 'Error!',
        text: 'Invalid slot: Ending time must be greater than starting time',
        icon: 'error',
        confirmButtonText: 'Oh!'
      })
      console.error('Invalid slot: Ending time must be greater than starting time');
      // window.alert('Invalid slot: Ending time must be greater than starting time');
      return;
    }

    const slot = {
      day: newSlot.day,
      slot: `${startHour}:${startMinute}-${endHour}:${endMinute}`
    };

    try {
      const res = await fetch('/lawyer/freeslots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slot),
      });
      if (res.ok) {
        fetchFreeSlots();
        setNewSlot({ day: '', startHour: '', startMinute: '', endHour: '', endMinute: '' });
      } else {
        console.error('Failed to add free slot:', res.statusText);
      }
    } catch (error) {
      console.error('Error adding free slot:', error);
    }
  };

  const deleteSlot = async (id) => {
    try {
      const res = await fetch(`/lawyer/freeslots/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchFreeSlots();
      } else {
        console.error('Failed to delete free slot:', res.statusText);
      }
    } catch (error) {
      console.error('Error deleting free slot:', error);
    }
  };

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(i < 10 ? `0${i}` : `${i}`);
    }
    return options;
  };

  return (
    <div className="container mx-auto my-5 px-6 py-10 shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold mb-6">Manage Free Slots</h2>
      <div className="flex flex-col sm:flex-row mb-6">
        <label className="mb-2 sm:mb-0 mr-4">
          Day:
          <select
            required
            value={newSlot.day}
            onChange={(e) => setNewSlot({ ...newSlot, day: e.target.value })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Day</option>
            {days.map(day => <option key={day} value={day}>{day}</option>)}
          </select>
        </label>

        <label className="mb-2 sm:mb-0 mr-4">
          Start Time:
          <div className="flex">
            <select
              required
              value={newSlot.startHour}
              onChange={(e) => setNewSlot({ ...newSlot, startHour: e.target.value })}
              className="block w-1/2 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">HH</option>
              {generateOptions(0, 23).map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            <select
              required
              value={newSlot.startMinute}
              onChange={(e) => setNewSlot({ ...newSlot, startMinute: e.target.value })}
              className="block w-1/2 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">MM</option>
              {generateOptions(0, 59).map(option => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
        </label>

        <label className="mb-2 sm:mb-0 mr-4">
          End Time:
          <div className="flex">
            <select
              required
              value={newSlot.endHour}
              onChange={(e) => setNewSlot({ ...newSlot, endHour: e.target.value })}
              className="block w-1/2 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">HH</option>
              {generateOptions(0, 23).map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            <select
              required
              value={newSlot.endMinute}
              onChange={(e) => setNewSlot({ ...newSlot, endMinute: e.target.value })}
              className="block w-1/2 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">MM</option>
              {generateOptions(0, 59).map(option => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
        </label>

        <button
          onClick={addSlot}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 self-end"
        >
          Add Slot
        </button>
      </div>
      <ul className="mt-4 border rounded-lg overflow-hidden">
        {freeSlots.map((slot) => (
          <li key={slot.id} className="flex items-center justify-between border-b py-2 px-4">
            <span className="text-lg">{slot.day} - {slot.slot}</span>
            <button
              onClick={() => deleteSlot(slot.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-1 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageFreeSlots;
