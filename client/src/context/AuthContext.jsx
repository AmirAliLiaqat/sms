import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize from LocalStorage to maintain session on refresh without API
  useEffect(() => {
    const savedUser = localStorage.getItem("sms_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Simple dummy logic: Allow any login for now as requested
    const dummyUser = {
      id: "admin-1",
      name: "Super Admin",
      email: email,
      role: "Admin",
      avatar: "S",
    };

    setUser(dummyUser);
    localStorage.setItem("sms_user", JSON.stringify(dummyUser));
    return { success: true, data: { user: dummyUser } };
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("sms_user");
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
