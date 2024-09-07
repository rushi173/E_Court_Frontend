import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Signup";
import VerifyEmail from "./Components/Verifyemail";
import SignIn from "./Components/Signin";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./Components/Resetpassword";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import DashboardContent from "./Components/Dashboardcontent";

function App() {
  return (
    <Router>
      <Routes>
        {/* SignUp, Verify Email, SignIn, Forgot Password, Reset Password */}
        <Route path="/" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Layout with Sidebar, Navbar, and Additional Components */}
        <Route
          path="/dashboard"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                <DashboardContent />
              </div>
            </div>
          }
        />

        {/* Add more routes for other dashboard-related components */}
        <Route
          path="/complete-profile"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                {/* Complete Profile component goes here */}
                <div className="p-8">Complete Profile Page</div>
              </div>
            </div>
          }
        />
        <Route
          path="/search-advocate"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                {/* Search Advocate component */}
                <div className="p-8">Search Advocate Page</div>
              </div>
            </div>
          }
        />
        <Route
          path="/register-case"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                {/* Register Case component */}
                <div className="p-8">Register Case Page</div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
