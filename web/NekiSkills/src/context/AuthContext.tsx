import { ReactNode, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalItem, getSessionItem } from "@/services/storage";
import jwt_decode from "jwt-decode";
import { Token } from "@/types/authTypes";

type AuthContextProps = {
  children: ReactNode;
};

type AuthContextType = {
  isAuthenticated: () => unknown;
  logout: () => void;
  getToken: () => void;
  getUserId: () => void;
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

  function getToken(): string | void {
    const storage = getLocalItem("user") || getSessionItem("user");
    if (storage != null) {
      return storage.token;
    }
  }
  function getUserId(): string | void {
    const token = getToken();
    if (token != null) {
      const decodedToken: Token = jwt_decode(token);
      return decodedToken.userId;
    }
  }

  return (
    <AuthContext.Provider
      value={
        { isAuthenticated, logout, getToken, getUserId } as AuthContextType
      }
    >
      {children}
    </AuthContext.Provider>
  );
};
