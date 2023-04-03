import React, { useContext } from 'react';
import Loading from '../loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    }

    if (loading) {
        return (
            <Loading></Loading>
        )
    }

    return <Navigate to="/signIn" state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoute;