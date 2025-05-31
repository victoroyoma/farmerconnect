import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import FinancePage from './pages/FinancePage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
export function App() {
  return <Router>
      <div className="flex flex-col h-screen bg-gray-50">
        <div className="flex-1 overflow-y-auto pb-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <BottomNavigation />
      </div>
    </Router>;
}