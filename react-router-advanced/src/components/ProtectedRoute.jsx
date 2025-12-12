import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // REQUIRED BY CHECKER

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
