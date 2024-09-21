/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Utilities/userContext';
import { useContext } from 'react';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    if (!user || !user.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;