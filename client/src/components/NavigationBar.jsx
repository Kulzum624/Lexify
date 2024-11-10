import React from 'react';
import LawyerNav from'./LawyerNav';
import UserNav from './UserNav';
import AdminNav from './AdminNav';

const NavigationBar = ({ userType, email }) => {
  return (
    <>
      {userType === 'user' && (
        <>
          <UserNav/>
        </>
      )}
      {userType === 'admin' && (
        <>
          <AdminNav/>
        </>
      )}
      {userType === 'lawyer' && (
        <>
          <LawyerNav email={email}/>
        </>
      )}
    </>
  );
  
};

export default NavigationBar;
