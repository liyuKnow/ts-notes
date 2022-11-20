import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    if (false) {
        return <Navigate to="/" /> || <Navigate to="/login" />
    }
    return children;
}

export default ProtectedRoute