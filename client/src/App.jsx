import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
