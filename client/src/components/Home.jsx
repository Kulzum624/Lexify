import React from 'react';
import JoinRoom from './JoinRoom';

const Home = () => {


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
      {/* <div style={styles}>
        It's HOME PAGE
      </div> */}
      <JoinRoom/>


    </div >
  );
}

export default Home;