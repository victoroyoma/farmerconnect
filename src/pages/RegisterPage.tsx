import React, { useState } from 'react';
import { ChevronLeftIcon, CameraIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
  const [userType, setUserType] = useState('');
  const [step, setStep] = useState(1);
  const renderUserTypeSelection = () => {
    return <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Join FarmConnect
        </h2>
        <p className="text-gray-600 mb-8">
          Select your account type to get started
        </p>
        <div className="space-y-4">
          <button className={`w-full p-4 rounded-lg border-2 flex items-center ${userType === 'farmer' ? 'border-green-600 bg-green-50' : 'border-gray-200'}`} onClick={() => setUserType('farmer')}>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-800">I am a Farmer</h3>
              <p className="text-sm text-gray-600">
                Sell your farm products to buyers
              </p>
            </div>
          </button>
          <button className={`w-full p-4 rounded-lg border-2 flex items-center ${userType === 'buyer' ? 'border-green-600 bg-green-50' : 'border-gray-200'}`} onClick={() => setUserType('buyer')}>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-800">I am a Buyer</h3>
              <p className="text-sm text-gray-600">
                Purchase products directly from farmers
              </p>
            </div>
          </button>
        </div>
        <button className={`w-full py-3 rounded-lg mt-8 font-medium ${userType ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'}`} disabled={!userType} onClick={() => userType && setStep(2)}>
          Continue
        </button>
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="text-green-600 font-medium">
            Sign in
          </Link>
        </p>
      </div>;
  };
  const renderFarmerRegistration = () => {
    return <div className="p-4">
        <div className="flex items-center mb-6">
          <button className="p-2 rounded-full bg-gray-100 mr-2" onClick={() => setStep(1)}>
            <ChevronLeftIcon size={20} />
          </button>
          <h2 className="text-xl font-bold text-gray-800">
            Farmer Registration
          </h2>
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden relative">
            <CameraIcon size={30} className="text-gray-500" />
            <button className="absolute bottom-0 right-0 bg-green-600 text-white p-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Farm Name
            </label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your farm name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent appearance-none bg-white">
              <option value="">Select your location</option>
              <option value="asaba">Asaba</option>
              <option value="warri">Warri</option>
              <option value="ughelli">Ughelli</option>
              <option value="sapele">Sapele</option>
              <option value="agbor">Agbor</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Categories
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Vegetables', 'Fruits', 'Poultry', 'Fishery', 'Palm Oil', 'Cassava', 'Yam'].map(category => <label key={category} className="flex items-center p-3 border border-gray-300 rounded-lg">
                  <input type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-700">{category}</span>
                </label>)}
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium">
              Submit for Approval
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            Your registration will be reviewed by our team. You'll be notified
            once approved.
          </p>
        </form>
      </div>;
  };
  const renderBuyerRegistration = () => {
    return <div className="p-4">
        <div className="flex items-center mb-6">
          <button className="p-2 rounded-full bg-gray-100 mr-2" onClick={() => setStep(1)}>
            <ChevronLeftIcon size={20} />
          </button>
          <h2 className="text-xl font-bold text-gray-800">
            Buyer Registration
          </h2>
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden relative">
            <CameraIcon size={30} className="text-gray-500" />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Name
            </label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your business name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your email address" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white">
              <option value="">Select your location</option>
              <option value="asaba">Asaba</option>
              <option value="warri">Warri</option>
              <option value="ughelli">Ughelli</option>
              <option value="sapele">Sapele</option>
              <option value="agbor">Agbor</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interested Products
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Vegetables', 'Fruits', 'Poultry', 'Fishery', 'Palm Oil', 'Cassava', 'Yam'].map(category => <label key={category} className="flex items-center p-3 border border-gray-300 rounded-lg">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-700">{category}</span>
                </label>)}
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium">
              Submit for Approval
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            Your registration will be reviewed by our team. You'll be notified
            once approved.
          </p>
        </form>
      </div>;
  };
  return <div className="bg-white min-h-screen">
      {step === 1 && renderUserTypeSelection()}
      {step === 2 && userType === 'farmer' && renderFarmerRegistration()}
      {step === 2 && userType === 'buyer' && renderBuyerRegistration()}
    </div>;
};
export default RegisterPage;