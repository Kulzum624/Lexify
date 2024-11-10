import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaStar, FaIdCard, FaPhone, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ViewLawyer = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await fetch('/user/view-lawyers/lawyers');
        const data = await response.json();
        setLawyers(data);
      } catch (error) {
        setError('Error fetching lawyers');
        console.error('Error fetching lawyers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredLawyers = lawyers.filter((lawyer) =>
    lawyer.lawyer_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMakeAppointment = (lawyerEmail, lawyerName) => {
    history(`/user/make-appointment/${lawyerEmail}/${lawyerName}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto my-5 px-6 py-10 shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold mb-6">View Lawyers</h2>
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by lawyer name"
            value={searchQuery}
            onChange={handleSearch}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredLawyers.length === 0 ? (
          <p className="text-gray-500 py-4">No lawyers found.</p>
        ) : (
          filteredLawyers.map((lawyer) => (
            <div key={lawyer.lawyer_id} className="border rounded-lg shadow-sm bg-white p-4">
              <h5 className="text-xl font-bold mb-2">{lawyer.lawyer_name}</h5>
              <p className="text-gray-600">
                <FaEnvelope className="inline-block mr-1" /> {lawyer.lawyer_email}{' '}
                <FaStar className="inline-block mr-1" /> {lawyer.lawyer_rating}{' '}
                <FaIdCard className="inline-block mr-1" /> {lawyer.lawyer_license_no}{' '}
                <FaPhone className="inline-block mr-1" /> {lawyer.lawyer_contact}{' '}
                <strong className="font-bold">Speciality: </strong>
                {lawyer.specialities[0].speciality_name} -{' '}
                <strong className="font-bold">Description: </strong>
                {lawyer.specialities[0].description}
              </p>
              <button
                onClick={() => handleMakeAppointment(lawyer.lawyer_email, lawyer.lawyer_name)}
                className="mt-4 bg-gray-700 text-white hover:bg-gray-400 font-bold py-2 px-4 rounded"
              >
                Make Appointment
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewLawyer;
