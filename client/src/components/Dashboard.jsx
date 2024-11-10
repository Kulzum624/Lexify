import React from "react"
import JoinRoom from './JoinRoom';

const Dashboard = (props) => {
  const styles = {
    backgroundColor: 'gray', 
    padding: '20px',
    borderRadius: '10px', 
    textAlign: 'center', 
    color: 'white', 
    fontSize: '24px', 
  };

  return (
     <div style={styles}>  
    <JoinRoom/>
    </div>
 
  )
};

export default Dashboard;
