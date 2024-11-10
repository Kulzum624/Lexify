import React, { useState, useEffect } from 'react';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        const response = await fetch('/admin/manage-users/users'); 
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Error fetching users');
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this User?");
  
  if (!confirmDelete) {
    return;
  }
    try {
      const response = await fetch(`/admin/manage-users/users/${userId}`, {
        method: 'DELETE',
      });
  
      if (response.status === 200) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.user_id !== userId));
        // window.alert("User deleted")
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
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
  <h2 className="text-4xl font-bold mb-4">Manage Users</h2>
  <ul className="divide-y divide-gray-200 mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm">
    {users.map((user) => (
      <li key={user.user_id} className="bg-gray-100 p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="mb-2 sm:mb-0">
          <div className="flex flex-wrap">
            <strong className="mr-2">Name:</strong>{user.user_name} -
            <strong className="mx-2">Email:</strong>{user.user_email} -
            <strong className="mx-2">Contact:</strong> {user.user_contact}
          </div>
        </div>
        <button
          onClick={() => handleDeleteUser(user.user_id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>

  );

};

export default ManageUser;
