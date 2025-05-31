import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon, CreditCardIcon, BanknoteIcon, UsersIcon, PiggyBankIcon } from 'lucide-react';
import Header from '../components/Header';
const FinancePage = () => {
  const [selectedTab, setSelectedTab] = useState('wallet');
  const renderWalletTab = () => {
    return <div className="p-4">
        <div className="bg-green-600 rounded-lg p-5 text-white">
          <p className="text-sm opacity-90">Available Balance</p>
          <h2 className="text-2xl font-bold mt-1">₦125,000.00</h2>
          <div className="flex justify-between mt-5">
            <button className="bg-white bg-opacity-20 rounded-lg p-3 flex flex-col items-center w-[30%]">
              <ArrowUpIcon size={20} />
              <span className="text-xs mt-1">Send</span>
            </button>
            <button className="bg-white bg-opacity-20 rounded-lg p-3 flex flex-col items-center w-[30%]">
              <ArrowDownIcon size={20} />
              <span className="text-xs mt-1">Receive</span>
            </button>
            <button className="bg-white bg-opacity-20 rounded-lg p-3 flex flex-col items-center w-[30%]">
              <CreditCardIcon size={20} />
              <span className="text-xs mt-1">Top Up</span>
            </button>
          </div>
        </div>
        <h3 className="font-medium text-gray-800 mt-5 mb-3">
          Recent Transactions
        </h3>
        <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
          <div className="p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <ArrowDownIcon size={18} className="text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Received Payment</p>
                <p className="text-xs text-gray-500">From Green Acres</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-green-600">+₦35,000</p>
              <p className="text-xs text-gray-500">Jun 10, 2023</p>
            </div>
          </div>
          <div className="p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <ArrowUpIcon size={18} className="text-red-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Sent Payment</p>
                <p className="text-xs text-gray-500">To Delta Fisheries</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-red-600">-₦12,500</p>
              <p className="text-xs text-gray-500">Jun 8, 2023</p>
            </div>
          </div>
          <div className="p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <CreditCardIcon size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Wallet Top Up</p>
                <p className="text-xs text-gray-500">Bank Transfer</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-green-600">+₦50,000</p>
              <p className="text-xs text-gray-500">Jun 5, 2023</p>
            </div>
          </div>
        </div>
      </div>;
  };
  const renderSavingsTab = () => {
    return <div className="p-4">
        <div className="bg-blue-600 rounded-lg p-5 text-white">
          <p className="text-sm opacity-90">Total Savings</p>
          <h2 className="text-2xl font-bold mt-1">₦75,000.00</h2>
          <button className="mt-4 bg-white text-blue-600 rounded-lg py-2 w-full font-medium">
            Create New Savings Goal
          </button>
        </div>
        <h3 className="font-medium text-gray-800 mt-5 mb-3">
          Your Savings Goals
        </h3>
        <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-800">New Tractor</h4>
              <p className="text-xs text-gray-500 mt-1">
                Target: December 2023
              </p>
            </div>
            <div className="bg-blue-100 py-1 px-2 rounded text-xs font-medium text-blue-700">
              In Progress
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress</span>
              <span className="text-gray-800 font-medium">
                ₦45,000 / ₦250,000
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{
              width: '18%'
            }}></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-800">Farm Expansion</h4>
              <p className="text-xs text-gray-500 mt-1">Target: August 2023</p>
            </div>
            <div className="bg-blue-100 py-1 px-2 rounded text-xs font-medium text-blue-700">
              In Progress
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress</span>
              <span className="text-gray-800 font-medium">
                ₦30,000 / ₦100,000
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{
              width: '30%'
            }}></div>
            </div>
          </div>
        </div>
      </div>;
  };
  const renderLendingTab = () => {
    return <div className="p-4">
        <div className="bg-purple-600 rounded-lg p-5 text-white">
          <div className="flex justify-between">
            <div>
              <p className="text-sm opacity-90">Available for Lending</p>
              <h2 className="text-2xl font-bold mt-1">₦50,000.00</h2>
            </div>
            <div>
              <p className="text-sm opacity-90">Current Loans</p>
              <h2 className="text-2xl font-bold mt-1">₦25,000.00</h2>
            </div>
          </div>
          <button className="mt-4 bg-white text-purple-600 rounded-lg py-2 w-full font-medium">
            Offer Loan
          </button>
        </div>
        <div className="flex justify-between mt-5 mb-3">
          <h3 className="font-medium text-gray-800">Loan Requests</h3>
          <button className="text-sm text-purple-600 font-medium">
            View All
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1592878849122-facb97520f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Farmer" className="w-12 h-12 rounded-full object-cover mr-3" />
              <div>
                <h4 className="font-medium text-gray-800">Green Acres</h4>
                <p className="text-xs text-gray-500">For purchasing seeds</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-800">₦15,000</p>
              <p className="text-xs text-gray-500">3 months @ 5%</p>
            </div>
          </div>
          <div className="flex space-x-2 mt-3">
            <button className="flex-1 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium">
              Approve
            </button>
            <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium">
              Decline
            </button>
          </div>
        </div>
        <h3 className="font-medium text-gray-800 mt-5 mb-3">
          Your Active Loans
        </h3>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">
                Loan to Delta Fisheries
              </h4>
              <p className="text-xs text-gray-500">For equipment repair</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-800">₦25,000</p>
              <div className="bg-green-100 py-0.5 px-2 rounded text-xs font-medium text-green-700 mt-1">
                Active
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Repayment Progress</span>
              <span className="text-gray-800 font-medium">
                ₦10,000 / ₦25,000
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{
              width: '40%'
            }}></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Started: May 15, 2023</span>
            <span>Due: Aug 15, 2023</span>
          </div>
        </div>
      </div>;
  };
  return <div className="bg-gray-50 min-h-screen">
      <Header title="Finance" />
      <div className="grid grid-cols-3 gap-1 p-2 bg-gray-100 mx-4 rounded-lg mt-3">
        <button className={`py-2 text-center text-sm font-medium rounded-md ${selectedTab === 'wallet' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600'}`} onClick={() => setSelectedTab('wallet')}>
          <BanknoteIcon size={16} className="mx-auto mb-1" />
          Wallet
        </button>
        <button className={`py-2 text-center text-sm font-medium rounded-md ${selectedTab === 'savings' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'}`} onClick={() => setSelectedTab('savings')}>
          <PiggyBankIcon size={16} className="mx-auto mb-1" />
          Savings
        </button>
        <button className={`py-2 text-center text-sm font-medium rounded-md ${selectedTab === 'lending' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-600'}`} onClick={() => setSelectedTab('lending')}>
          <UsersIcon size={16} className="mx-auto mb-1" />
          Lending
        </button>
      </div>
      {selectedTab === 'wallet' && renderWalletTab()}
      {selectedTab === 'savings' && renderSavingsTab()}
      {selectedTab === 'lending' && renderLendingTab()}
    </div>;
};
export default FinancePage;