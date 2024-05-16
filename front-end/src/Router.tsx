import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { AdminPage } from "./pages/admin";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/signin" />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/admin" element={<AdminPage />} />
      </Routes>
   )
}