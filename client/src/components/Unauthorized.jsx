import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div>


            <div className="relative text-center">
                <h1 className="text-2xl font-semibold mb-4">Oops! You are not authorized yet, Login First</h1>
                <p>
                    <Link to="/login" className="text-blue-500 hover:text-blue-700">Go to login</Link>
                </p>
            </div>


        </div>
    )
};

export default Unauthorized;
