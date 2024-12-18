import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // Redirect to landing page if no user is logged in
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
