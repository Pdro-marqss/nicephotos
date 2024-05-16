import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/signup" />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />
      </Routes>
   )
}