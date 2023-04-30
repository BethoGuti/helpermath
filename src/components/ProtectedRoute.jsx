import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  console.log(user);

  if (loading) return ;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}