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
import ForgetPassword from "./Pages/ForgetPassword";
import PrivateComponent from "./Components/PrivateComponent";
import PrivateComponentADmin from "./Components/PrivateComponentADmin";
import CreateListiing from "./Pages/CreateListiing";
import ShowListing from "./Pages/showListing";
import UpdateListing from "./Pages/UpdateListing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/createListing" element={<CreateListiing />} />
            <Route path="/showUserlisting" element={<ShowListing />} />
            <Route path="/updateListing/:id" element={<UpdateListing />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/verify/otp" element={<OTPVerify />} />
          <Route path="/forget/password" element={<ForgetPassword />} />

          <Route element={<PrivateComponentADmin />}>
            <Route path="/admin-dash" element={<h1>Admin dash board</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
