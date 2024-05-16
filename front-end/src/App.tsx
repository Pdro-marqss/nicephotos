import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { ToastContainer } from "react-toastify";

import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Router />
    </BrowserRouter>
  )
}
