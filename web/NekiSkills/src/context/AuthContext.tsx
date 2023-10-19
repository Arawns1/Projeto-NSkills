import React, { ReactNode, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalItem, getSessionItem } from "@/services/storage";

type AuthContextProps = {
  children: ReactNode;
};

type AuthContextType = {
  isAuthenticated: () => unknown;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const navigate = useNavigate();
  function isAuthenticated(): unknown {
    const recoveredUser = getLocalItem("user") || getSessionItem("user");
    return recoveredUser;
  }

  function logout(): void {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
