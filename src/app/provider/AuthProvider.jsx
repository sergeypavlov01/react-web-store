import { useState } from "react"
import { AuthContext } from "../../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (callback) => {
    setIsAuth(true);
    callback();
  }

  const logout = (callback) => {
    setIsAuth(false);
    callback();
  }

  const value = {isAuth, login, logout}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}