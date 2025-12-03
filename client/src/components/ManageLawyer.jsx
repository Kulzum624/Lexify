import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './ManageLawyer.css';

// const bcryptjs = require('bcryptjs');

const ManageLawyer = () => {
  const [lawyers, setLawyers] = useState([]);
  const [newLawyer, setNewLawyer] = useState({
    lawyer_name: '',
    lawyer_email: '',
    lawyer_contact: '',
    lawyer_address: '',
    lawyer_license_no: '',
    lawyer_cnic_no: '',
    lawyer_password: '',
    lawyer_rating: '',
    speciality_name: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const validateName = () => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(newLawyer.lawyer_name);
  }

  const validateSpeciality = () => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(newLawyer.speciality_name);
  }

  const validateAddress = () => {
    const regex = /^[a-zA-Z0-9\s#&',.\-/]+$/;
    return regex.test(newLawyer.lawyer_address);
  }

  const validatePassword = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(newLawyer.lawyer_password);
  }

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setNewLawyer({ ...newLawyer, [name]: value });
  }

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await fetch('/admin/manage-lawyers/lawyers');
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

  const handleDeleteLawyer = async (lawyerId) => {
    
    const confirmDelete = window.confirm("Are you sure you want to delete this lawyer?");

    if (!confirmDelete) {
      return;
    }
    try {
      const response = await fetch(`/admin/manage-lawyers/lawyers/${lawyerId}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        setLawyers((prevLawyers) => prevLawyers.filter((lawyer) => lawyer.lawyer_id !== lawyerId));
        Swal.fire({
          title: 'Error!',
          text: 'Lawyer Deleted',
          icon: 'error',
          confirmButtonText: 'ok'
        })
        // window.alert("Lawyer Deleted")
      } else {
        console.error('Failed to delete lawyer');
      }
    } catch (error) {
      console.error('Error deleting lawyer:', error);
    }
  };

  const handleAddLawyer = async (event) => {
    event.preventDefault();

    const errors = {};
    if (!validateSpeciality()) {
      errors.speciality_name = "Please enter a valid speciality (only alphabets and spaces allowed).";
    }
    if (!validateName()) {
      errors.name = "Please enter a valid name (only alphabets and spaces allowed).";
    }
    if (!validateAddress()) {
      errors.address = "Please enter a valid address.Valid Char{#,&,',.,-,/}";
    }
    if (!validatePassword()) {
      errors.password = "8 Characters having numbers and words";
    }
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    // const hashedPassword = await bcryptjs.hash(newLawyer.lawyer_password, 10);
    // newLawyer.lawyer_password=hashedPassword;

    try {
      const response = await fetch('/admin/manage-lawyers/lawyers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLawyer),
      });

      if (response.status === 201) {
        window.alert("Credientals Sent to Lawyer email");
        const addedLawyer = await response.json();
        setLawyers((prevLawyers) => [...prevLawyers, addedLawyer]);
        setNewLawyer({
          lawyer_name: '',
          lawyer_email: '',
          lawyer_contact: '',
          lawyer_address: '',
          lawyer_license_no: '',
          lawyer_cnic_no: '',
          lawyer_password: '',
          lawyer_rating: '',
          speciality_name: '',
          description: '',
        });
      } else if (response.status === 400 || !response) {
        window.alert("Already Used Details")
        setValidationErrors({});
      }
    } catch (error) {
      console.error('Error adding lawyer:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="container shadow my-5 mx-auto px-9 py-20">
  <h2 className="text-4xl font-bold mb-4">Manage Lawyers</h2>
<ul className="divide-y divide-gray-200 mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm ">
  {lawyers.map((lawyer) => (
    <li key={lawyer.lawyer_id} className="bg-gray-100 p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <div className="mb-2 md:mb-0">
        <div className="flex flex-wrap">
          <strong className="mr-2">Name:</strong>{lawyer.lawyer_name} -
          <strong className="mx-2">Email:</strong>{lawyer.lawyer_email} -
          <strong className="mx-2">Rating:</strong>{lawyer.lawyer_rating} -
          <strong className="mx-2">License:</strong> {lawyer.lawyer_license_no} -
          <strong className="mx-2">Contact:</strong> {lawyer.lawyer_contact} -
          <strong className="mx-2">Speciality:</strong> {lawyer.specialities[0].speciality_name}
        </div>
        {lawyer.specialities && lawyer.specialities.length > 0 && (
          <div>

          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => handleDeleteLawyer(lawyer.lawyer_id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>



      <div className="container shadow my-5 mx-auto px-9 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="col-md-5 md:order-2 flex flex-col items-center justify-center form text-white">
            <h1 className="text-4xl font-bold mb-4 text-oultine">Add Lawyer</h1>
            <p className="text-lg text-center mb-3">Enter Details To Register</p>
            <h5 className="text-lg mb-4">OR</h5>
            <nav>
              <Link to="/admin/manage-user" className="bg-form hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-lg transition-colors duration-300 ease-in-out hover:text-black">
                Manage User
              </Link>
            </nav>
          </div>
          <div className="p-5">
            <h1 className="text-3xl font-bold mb-5">Registration</h1>
            <form onSubmit={handleAddLawyer} className="space-y-4" method="POST">
              <div>
                <label htmlFor="lawyer_name" className="form-label">Lawyer Name:</label>
                <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="lawyer_name" name="lawyer_name" value={newLawyer.lawyer_name} onChange={handleInput} required />
                {validationErrors.name && <div className="text-red-500">{validationErrors.name}</div>}
              </div>
              <div>
                <label htmlFor="lawyer_email" className="form-label">Lawyer Email:</label>
                <input type="email" pattern="[\w\.-]+@(gmail\.com|cfd\.nu\.edu\.pk|yahoo\.com)" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="lawyer_email" name="lawyer_email" placeholder="abc@gmail.com" value={newLawyer.lawyer_email} onChange={handleInput} required />
              </div>
              <div className="mb-3">
                <label htmlFor="lawyer_contact" className="form-label">Lawyer Contact:</label>
                <input
                  type="tel"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="lawyer_contact"
                  name="lawyer_contact"
                  value={newLawyer.lawyer_contact}
                  onChange={handleInput}
                  pattern="[0-9]{4}-[0-9]{7}"
                  placeholder="****-*******"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lawyer_address" className="form-label">Lawyer Address:</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="lawyer_address"
                  name="lawyer_address"
                  value={newLawyer.lawyer_address}
                  onChange={handleInput}
                  required
                />
                {validationErrors.address && <div className="text-danger">{validationErrors.address}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="lawyer_license_no" className="form-label">Lawyer License Number:</label>
                <input
                  type="license"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="lawyer_license_no"
                  name="lawyer_license_no"
                  pattern="[a-zA-z]{2}-[0-9]{4}/[0-9]{2}"
                  placeholder="PK-1234/18"
                  value={newLawyer.lawyer_license_no}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lawyer_cnic_no" className="form-label">Lawyer CNIC Number:</label>
                <input
                  type="cnic"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="lawyer_cnic_no"
                  name="lawyer_cnic_no"
                  value={newLawyer.lawyer_cnic_no}
                  pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                  placeholder="12345-1234567-1"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lawyer_password" className="form-label">Lawyer Password:</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="lawyer_password"
                  name="lawyer_password"
                  value={newLawyer.lawyer_password}
                  onChange={handleInput}
                  required
                />
                {validationErrors.password && (<div className="text-danger">{validationErrors.password}</div>)}
              </div>
              <div className="mb-3">
                <label htmlFor="lawyer_rating" className="form-label">Lawyer Rating:</label>
                <input
                  type="tel"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="lawyer_rating"
                  name="lawyer_rating"
                  value={newLawyer.lawyer_rating}
                  pattern="[0-5]{1}"
                  placeholder="5"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="speciality_name" className="form-label">Speciality Name:</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="speciality_name"
                  name="speciality_name"
                  value={newLawyer.speciality_name}
                  onChange={handleInput}
                  required
                />
                {validationErrors.speciality_name && <div className="text-danger">{validationErrors.speciality_name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Speciality Description:</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="description"
                  name="description"
                  value={newLawyer.description}
                  onChange={handleInput}
                  required
                />
              </div>
              <button type="submit"className="mt-4 w-full inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors">Register</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ManageLawyer;
