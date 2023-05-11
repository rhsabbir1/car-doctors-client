import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user ,loader } = useContext(AuthContex)

    const location = useLocation()

    if(loader){
        return <progress className="progress w-56 text-center"></progress>
    }
    if(user?.email){
        return children;
    }
    return (
     <Navigate state={{from: location}} to='/login' replace> </Navigate>
    );
};

export default PrivateRoute;