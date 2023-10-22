import { ReactNode, createContext, useEffect, useState } from "react";
import {
  AuthContextType,
  LoginRequest,
  SignUpRequest,
  Token,
} from "../types/authTypes";
import { api } from "../services/axios";
import {
  deleteLocalItem,
  getLocalItem,
  setLocalItem,
} from "../services/storage";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext<AuthContextType | null>(null);

export type AuthContextProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  async function fetchUser() {
    const token = await getLocalItem("user");
    if (token) {
      setUserToken(token);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  async function signInUser(data: LoginRequest, rememberCredentials = false) {
    try {
      const token = await api.post("/auth/login", data);
      if (rememberCredentials) await setLocalItem("user", token.data.token);
      setUserToken(token.data.token);
    } catch (error) {
      console.error("Error getting token from login request ", error);
    }
  }

  async function signUpUser(data: SignUpRequest) {
    data.role = "USER";
    try {
      const token = await api.post("/auth/signup", data);
      setUserToken(token.data.token);
    } catch (error) {
      console.error("Error getting token from signup request ", error);
    }
  }

  function logout(): void {
    deleteLocalItem("user");
    setUserToken(null);
  }

  function getUserId(): string | void {
    if (userToken) {
      const decodedToken: Token = jwt_decode(userToken);
      return decodedToken.userId;
    }
  }

  function getToken(): string | null {
    return userToken;
  }

  return (
    <AuthContext.Provider
      value={
        {
          signInUser,
          signUpUser,
          logout,
          getUserId,
          getToken,
        } as AuthContextType
      }
    >
      {children}
    </AuthContext.Provider>
  );
};
