import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, XCircleIcon, ChevronLeftIcon, UsersIcon, CalendarIcon, BarChart2Icon, SettingsIcon } from 'lucide-react';
import Header from '../components/Header';
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('approvals');
  const pendingFarmers = [{
    id: 1,
    name: 'Green Valley Farm',
    owner: 'James Okonkwo',
    location: 'Asaba, Delta State',
    products: ['Cassava', 'Vegetables'],
    date: 'Jun 10, 2023',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 2,
    name: 'Delta Rice Farm',
    owner: 'Sarah Adebayo',
    location: 'Warri, Delta State',
    products: ['Rice'],
    date: 'Jun 12, 2023',
    image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }];
  const pendingBuyers = [{
    id: 1,
    business: 'Fresh Foods Market',
    owner: 'Michael Eze',
    location: 'Sapele, Delta State',
    interests: ['Vegetables', 'Fruits', 'Poultry'],
    date: 'Jun 11, 2023',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }];
  const renderApprovals = () => {
    return <div className="p-4">
        <div className="flex border-b border-gray-200 mb-4">
          <button className={`flex-1 py-3 text-center text-sm font-medium ${activeTab === 'approvals' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('approvals')}>
            Pending Approvals
          </button>
          <button className={`flex-1 py-3 text-center text-sm font-medium ${activeTab === 'approved' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('approved')}>
            Approved
          </button>
        </div>
        <h3 className="font-medium text-gray-800 mb-3">Farmers (2)</h3>
        {pendingFarmers.map(farmer => <div key={farmer.id} className="bg-white rounded-lg shadow-sm p-4 mb-3">
            <div className="flex items-center">
              <img src={farmer.image} alt={farmer.name} className="w-12 h-12 rounded-full object-cover mr-3" />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{farmer.name}</h4>
                <p className="text-xs text-gray-500">
                  {farmer.owner} • {farmer.location}
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {farmer.products.map((product, index) => <span key={index} className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                      {product}
                    </span>)}
                </div>
              </div>
              <p className="text-xs text-gray-500">{farmer.date}</p>
            </div>
            <div className="flex space-x-2 mt-3">
              <button className="flex-1 py-2 flex items-center justify-center bg-green-600 text-white rounded-lg text-sm font-medium">
                <CheckCircleIcon size={16} className="mr-1" />
                Approve
              </button>
              <button className="flex-1 py-2 flex items-center justify-center border border-red-500 text-red-500 rounded-lg text-sm font-medium">
                <XCircleIcon size={16} className="mr-1" />
                Reject
              </button>
            </div>
          </div>)}
        <h3 className="font-medium text-gray-800 mt-5 mb-3">Buyers (1)</h3>
        {pendingBuyers.map(buyer => <div key={buyer.id} className="bg-white rounded-lg shadow-sm p-4 mb-3">
            <div className="flex items-center">
              <img src={buyer.image} alt={buyer.business} className="w-12 h-12 rounded-full object-cover mr-3" />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{buyer.business}</h4>
                <p className="text-xs text-gray-500">
                  {buyer.owner} • {buyer.location}
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {buyer.interests.map((interest, index) => <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {interest}
                    </span>)}
                </div>
              </div>
              <p className="text-xs text-gray-500">{buyer.date}</p>
            </div>
            <div className="flex space-x-2 mt-3">
              <button className="flex-1 py-2 flex items-center justify-center bg-green-600 text-white rounded-lg text-sm font-medium">
                <CheckCircleIcon size={16} className="mr-1" />
                Approve
              </button>
              <button className="flex-1 py-2 flex items-center justify-center border border-red-500 text-red-500 rounded-lg text-sm font-medium">
                <XCircleIcon size={16} className="mr-1" />
                Reject
              </button>
            </div>
          </div>)}
      </div>;
  };
  return <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center">
          <Link to="/" className="p-2 rounded-full bg-gray-100 mr-2">
            <ChevronLeftIcon size={20} />
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
          <div className="bg-green-100 p-2 rounded-full">
            <UsersIcon size={20} className="text-green-600" />
          </div>
          <p className="text-2xl font-bold mt-2">24</p>
          <p className="text-xs text-gray-500">Total Farmers</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
          <div className="bg-blue-100 p-2 rounded-full">
            <UsersIcon size={20} className="text-blue-600" />
          </div>
          <p className="text-2xl font-bold mt-2">18</p>
          <p className="text-xs text-gray-500">Total Buyers</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
          <div className="bg-amber-100 p-2 rounded-full">
            <CalendarIcon size={20} className="text-amber-600" />
          </div>
          <p className="text-2xl font-bold mt-2">45</p>
          <p className="text-xs text-gray-500">Active Listings</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
          <div className="bg-purple-100 p-2 rounded-full">
            <BarChart2Icon size={20} className="text-purple-600" />
          </div>
          <p className="text-2xl font-bold mt-2">₦2.4M</p>
          <p className="text-xs text-gray-500">Transaction Vol.</p>
        </div>
      </div>
      {renderApprovals()}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 px-4">
        <button className="flex flex-col items-center text-green-600">
          <UsersIcon size={24} />
          <span className="text-xs mt-1">Users</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <CalendarIcon size={24} />
          <span className="text-xs mt-1">Calendar</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <BarChart2Icon size={24} />
          <span className="text-xs mt-1">Analytics</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <SettingsIcon size={24} />
          <span className="text-xs mt-1">Settings</span>
        </button>
      </div>
    </div>;
};
export default AdminDashboard;