import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // On mount, check localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  function login(email, password) {
    // Mock login validation
    if (email === "user@example.com" && password === "password") {
      const userData = { email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
