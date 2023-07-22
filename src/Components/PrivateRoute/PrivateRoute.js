import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location= useLocation()
    if(loading){
        return <span className="loading loading-ball loading-lg py-10 h-screen container flex"></span>
    }
    
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;