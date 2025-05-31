import React from 'react';
import { UserIcon, SettingsIcon, HelpCircleIcon, LogOutIcon, StarIcon, ClipboardListIcon } from 'lucide-react';
import Header from '../components/Header';
const ProfilePage = () => {
  return <div className="bg-gray-50 min-h-screen">
      <Header title="Profile" />
      <div className="bg-white p-5 flex flex-col items-center border-b border-gray-200">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1592878849122-facb97520f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h2 className="mt-3 font-semibold text-gray-800 text-lg">
          John Adewale
        </h2>
        <p className="text-gray-600 text-sm">Farmer • Asaba, Delta State</p>
        <div className="flex items-center mt-2">
          <StarIcon size={16} className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm ml-1 font-medium">4.8</span>
          <span className="text-sm text-gray-500 ml-1">(24 reviews)</span>
        </div>
        <button className="mt-4 w-full py-2 border border-green-600 text-green-600 rounded-lg text-sm font-medium">
          Edit Profile
        </button>
      </div>
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 flex items-center border-b border-gray-100">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <ClipboardListIcon size={20} className="text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">My Products</h3>
              <p className="text-xs text-gray-500">Manage your farm products</p>
            </div>
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="p-4 flex items-center border-b border-gray-100">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <UserIcon size={20} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Account Details</h3>
              <p className="text-xs text-gray-500">
                Update your personal information
              </p>
            </div>
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="p-4 flex items-center border-b border-gray-100">
            <div className="bg-purple-100 p-2 rounded-full mr-3">
              <SettingsIcon size={20} className="text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Settings</h3>
              <p className="text-xs text-gray-500">
                App preferences and notifications
              </p>
            </div>
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="p-4 flex items-center border-b border-gray-100">
            <div className="bg-amber-100 p-2 rounded-full mr-3">
              <HelpCircleIcon size={20} className="text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Help & Support</h3>
              <p className="text-xs text-gray-500">
                Get help and contact support
              </p>
            </div>
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="p-4 flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <LogOutIcon size={20} className="text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-red-600">Logout</h3>
              <p className="text-xs text-gray-500">Sign out of your account</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>FarmConnect v1.0.0</p>
          <p className="mt-1">© 2023 FarmConnect. All rights reserved.</p>
        </div>
      </div>
    </div>;
};
export default ProfilePage;