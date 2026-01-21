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

    let dummyUser;

    if (email.includes("superadmin")) {
      dummyUser = {
        id: "super-admin-1",
        name: "Global Controller",
        email: email,
        role: "SuperAdmin",
        avatar: "S",
      };
    } else if (email.includes("admin")) {
      dummyUser = {
        id: "admin-1",
        name: "School Admin",
        email: email,
        role: "Admin",
        avatar: "A",
      };
    } else if (email.includes("faculty") || email.includes("teacher")) {
      dummyUser = {
        id: "faculty-1",
        name: "Faculty Member",
        email: email,
        role: "Teacher",
        avatar: "F",
      };
    } else if (email.includes("manager")) {
      dummyUser = {
        id: "manager-1",
        name: "School Manager",
        email: email,
        role: "Manager",
        avatar: "M",
      };
    } else if (email.includes("staff")) {
      dummyUser = {
        id: "staff-1",
        name: "School Staff",
        email: email,
        role: "Staff",
        avatar: "S",
      };
    } else if (email.includes("library") || email.includes("librarian")) {
      dummyUser = {
        id: "librarian-1",
        name: "Librarian",
        email: email,
        role: "Librarian",
        avatar: "L",
      };
    } else if (email.includes("canteen")) {
      dummyUser = {
        id: "canteen-1",
        name: "Canteen Staff",
        email: email,
        role: "Canteen",
        avatar: "C",
      };
    } else if (email.includes("transport")) {
      dummyUser = {
        id: "transport-1",
        name: "Transport Manager",
        email: email,
        role: "Transport",
        avatar: "T",
      };
    } else {
      dummyUser = {
        id: "student-1",
        name: "Student User",
        email: email,
        role: "Student",
        avatar: "S",
      };
    }

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
