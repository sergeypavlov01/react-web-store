import { useAuth } from "../../hook/useAuth";
import { Navigate, useLocation } from "react-router"
import "../../hook/useAuth"

export const RequireAuth = ({ children }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to='/login' state={{from: location}}/>
  }

  return children
}