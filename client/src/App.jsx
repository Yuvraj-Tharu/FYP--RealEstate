import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
import OTPVerify from "./Pages/OTPVerify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/verify/otp" element={<OTPVerify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
