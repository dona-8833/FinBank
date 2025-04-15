// src/App.js
import React from "react";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";
import FinBank from "./components/Transfer/FinBank";
import OtherBank from "./components/Transfer/OtherBank";
import TransferPage from "./components/Transfer/Transfer";
import SignUp from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/transfer" element={<TransferPage />}>
                <Route path="FinBank" element={<FinBank />} />
                <Route path="OtherBank" element={<OtherBank />} />
              </Route>
            </Route>
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;