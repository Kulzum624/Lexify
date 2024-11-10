import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import NotificationBar from './NotificationBar'; 
import JoinRoom from './JoinRoom';
import Swal from 'sweetalert2';

const LawyerDashboard = () => {

  const { email } = useParams();
  const [bookingDetails, setBookingDetails] = useState([]);
  

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const res = await fetch(`/user/meetingrecords?lawyer_email=${email}`);
        if (res.status === 200) {
          const data = await res.json();
          setBookingDetails(data[0]); 
          console.log(data)
          
        } else {
          throw new Error("Failed to fetch booking details");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBookingDetails();
  }, [email]);

  const handleNotificationClose = async () => {
  const res =await fetch(`/user/meetingrecords/${bookingDetails.meeting_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: false }),
    });
    if(res.status === 200)
    {
    const code = await res.json();
    Swal.fire({
      title: 'Success',
      text: `Join Meeting Using Code : ${code}`,
      icon: 'info',
      confirmButtonText: 'Ok'
    })
    // window.alert(`Join Meeting Using Code : ${code}`);
    setBookingDetails(null); 
    }
  };

  return (
    <div>
    {/* <div style={styles}>
       Lawyer Dashboard
    </div> */}
     <div>
     {bookingDetails && (
      <>
        <NotificationBar bookingDetails={bookingDetails} onClose={handleNotificationClose} />
        {/* //<p>Meeting with {bookingDetails.lawyer_name} on {bookingDetails.day} at {bookingDetails.slot}</p> */}
      </>
    )}
     
    </div>

     <JoinRoom/>
     </div>
  )
};


export default LawyerDashboard;