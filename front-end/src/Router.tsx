import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
         <Route path="/login" element={<SignIn />} />
         <Route path="/signin" element={<SignUp />} />
      </Routes>
   )
}