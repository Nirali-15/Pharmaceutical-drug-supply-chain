import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Support from "./components/Pages/Support";
import Homepage from "./components/Pages/Homepage";
import ManufacturerForm from "./components/forms/ManufacturerForm";
import DistributorForm from "./components/forms/DistributorForm";
import PharmacyForm from "./components/forms/PharmacyForm";
import UserForm from "./components/forms/UserForm";
import Login from "./components/Pages/Login";
// import Register from "./components/Pages/Register";
import RoleBox from "./components/RoleBox";
import './styles/styles.css'; 
import AboutPage from "./components/Pages/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/manufacturer" element={<ManufacturerForm />} />
        <Route path="/distributor" element={<DistributorForm />} />
        <Route path="/pharmacy" element={<PharmacyForm />} />
        <Route path="/user" element={<UserForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/About" element={<AboutPage />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/rolebox" element={<RoleBox />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
