import React from 'react';
import { Navigate } from 'react-router-dom';

const Private = ({userType, auth, component: Component }) => {
    const routePrefix = window.location.pathname.split('/')[1];
    if(userType==="user" && routePrefix === 'user')
    {
        return auth ? <Component /> : <Navigate to="/" />;
    }
    else if(userType==="admin" && routePrefix === 'admin')
    {
        return auth ? <Component /> : <Navigate to="/" />;
    }
    else if(userType==="lawyer" && routePrefix === 'lawyer')
    {
        return auth ? <Component /> : <Navigate to="/" />;
    }
    else if(userType==="")
    {
    return auth ? <Component /> : <Navigate to="/" />;
    }
    else
    return <Navigate to="/" />;
};

export default Private;