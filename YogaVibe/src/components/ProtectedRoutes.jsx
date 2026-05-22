import { Navigate, Outlet } from "react-router-dom";
import { useContext, useState } from 'react'
import { AuthUser } from '../Contexts/UserContext'
import Loading from "./Loading";

const ProtectedRoute = () => {

    const { userData, loading } = useContext(AuthUser);

    if (loading) {
        return <Loading />;
    }

    return userData.is_authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;