import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CalendarIcon, WalletIcon, UserIcon } from 'lucide-react';
const BottomNavigation = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 px-4">
      <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-green-600' : 'text-gray-500'}`}>
        <HomeIcon size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link to="/calendar" className={`flex flex-col items-center ${isActive('/calendar') ? 'text-green-600' : 'text-gray-500'}`}>
        <CalendarIcon size={24} />
        <span className="text-xs mt-1">Calendar</span>
      </Link>
      <Link to="/finance" className={`flex flex-col items-center ${isActive('/finance') ? 'text-green-600' : 'text-gray-500'}`}>
        <WalletIcon size={24} />
        <span className="text-xs mt-1">Finance</span>
      </Link>
      <Link to="/profile" className={`flex flex-col items-center ${isActive('/profile') ? 'text-green-600' : 'text-gray-500'}`}>
        <UserIcon size={24} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>;
};
export default BottomNavigation;