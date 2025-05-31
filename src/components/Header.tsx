import React from 'react';
import { BellIcon, MenuIcon, SearchIcon } from 'lucide-react';
interface HeaderProps {
  title: string;
  showSearch?: boolean;
}
const Header = ({
  title,
  showSearch = false
}: HeaderProps) => {
  return <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <MenuIcon size={24} className="text-gray-700 mr-3" />
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          {showSearch && <SearchIcon size={22} className="text-gray-600" />}
          <BellIcon size={22} className="text-gray-600" />
        </div>
      </div>
      {showSearch && <div className="mt-3 relative">
          <input type="text" placeholder="Search for farmers or products..." className="w-full p-2 pl-10 border border-gray-300 rounded-lg text-sm" />
          <SearchIcon size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>}
    </header>;
};
export default Header;