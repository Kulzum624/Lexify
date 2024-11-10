import React from "react"
//import { Link } from 'react-router-dom';
import JoinRoom from './JoinRoom';

const AdminDashboard = (props) => {
  const styles = {
    backgroundColor: 'lightblue', 
    padding: '20px',
    borderRadius: '10px', 
    textAlign: 'center', 
    color: 'white', 
    fontSize: '24px', 
  };

  return (
    <div>
    <div style={styles}>
      
      Admin Dashboard
    </div>
     <JoinRoom/>
     </div>
  )
};

export default AdminDashboard;
