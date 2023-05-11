import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user ,loader } = useContext(AuthContex)
    if(loader){
        return <progress className="progress w-56 text-center"></progress>
    }
    if(user?.email){
        return children;
    }
    return (
     <Navigate to='/login' replace> </Navigate>
    );
};

export default PrivateRoute;