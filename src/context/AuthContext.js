import React, { createContext, useContext, useState } from "react";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
} from "../utils/localStorage";

// Create the AuthContext
const AuthContext = createContext();

// Provide the AuthContext to the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getUserFromLocalStorage());

  // Login function: Add user to context and localStorage
  const login = (userData) => {
    console.log("loggin in user", userData);
    setUser(userData);
    addUserToLocalStorage(userData);
  };

  // Logout function: Remove user from context and localStorage
  const logout = () => {
    setUser(null);
    removeUserFromLocalStorage();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
