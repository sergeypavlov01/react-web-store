import { useState } from "react"
import { AuthContext } from "../../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData, callback) => {
    setUser(userData);
    setIsAuth(true);
    callback();
  }

  const logout = (callback) => {
    setUser(null);
    setIsAuth(false);
    callback();
  }

  const value = {isAuth, user, login, logout}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}