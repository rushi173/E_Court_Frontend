import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Signup";
import VerifyEmail from "./Components/Verifyemail";
import SignIn from "./Components/Signin";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./Components/Resetpassword";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardContent from "./components/DashboardContent";
import Table from "./components/Table";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                <DashboardContent />
                <Table />
                <Form />
                <Modal />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
