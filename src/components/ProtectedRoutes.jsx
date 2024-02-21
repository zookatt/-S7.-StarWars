import { useContext } from "react";
import { apiContext } from "../context/apiContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = '/login' }) => {
    const { userLoggedIn } = useContext(apiContext);

    if (!userLoggedIn) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;