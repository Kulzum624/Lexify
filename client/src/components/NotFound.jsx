import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
       <div className="relative text-center">
          <h1 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h1>
          <p>The page you are looking for might be in another castle.</p>
          <p>
            <Link to="/" className="text-blue-500 hover:text-blue-700">Go to Home</Link>
          </p>
        </div>
      <div className="flex flex-col items-center justify-center w-screen h-auto">
       
        <img
          src={process.env.PUBLIC_URL + '/error404.jpg'}
          alt="Error"
          className="w-auto h-auto"
        />

      </div>

    </div>
  )
};

export default NotFound;
