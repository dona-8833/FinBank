import React from "react";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";
import FinBank from "./components/Transfer/FinBank";
import OtherBank from "./components/Transfer/OtherBank";
import TransferPage from "./components/Transfer/Transfer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            
            {/* Transfer page and nested routes */}
            <Route path="/transfer" element={<TransferPage />}>
              <Route path="FinBank" element={<FinBank />} />
              <Route path="OtherBank" element={<OtherBank />} />
            </Route>
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
