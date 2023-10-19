import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import NotFoundPage from "@/pages/notFound/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./private.routes";
import SignUp from "@/pages/signup/SignUp";
import { AuthProvider } from "@/context/AuthContext";
export default function AllRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route Component={Login} path="/" />
          <Route Component={SignUp} path="/signup" />
          <Route Component={NotFoundPage} path="*" />
          <Route element={<PrivateRoutes />}>
            <Route Component={Home} path="/home" />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
