import React, { useState } from 'react';
import Header from '../components/Header';
import CalendarItem from '../components/CalendarItem';
const CalendarPage = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const upcomingProducts = [{
    id: 1,
    farmer: 'Adamu Farms',
    product: 'Fresh Cassava',
    price: '₦15,000/bag',
    quantity: '50 bags',
    date: 'Jun 15, 2023',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 2,
    farmer: 'Green Acres',
    product: 'Chicken (Live)',
    price: '₦3,500/bird',
    quantity: '200 birds',
    date: 'Jun 18, 2023',
    image: 'https://images.unsplash.com/photo-1592878849122-facb97520f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 3,
    farmer: 'Delta Fisheries',
    product: 'Catfish (Fresh)',
    price: '₦1,200/kg',
    quantity: '500 kg',
    date: 'Jun 20, 2023',
    image: 'https://images.unsplash.com/photo-1535090042247-30387644aec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpc2hlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  }];
  const myListings = [{
    id: 4,
    farmer: 'Your Farm',
    product: 'Organic Tomatoes',
    price: '₦8,000/crate',
    quantity: '30 crates',
    date: 'Jun 25, 2023',
    image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }];
  return <div className="bg-gray-50 min-h-screen">
      <Header title="Sales Calendar" />
      <div className="flex border-b border-gray-200">
        <button className={`flex-1 py-3 text-center text-sm font-medium ${selectedTab === 'upcoming' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'}`} onClick={() => setSelectedTab('upcoming')}>
          Upcoming Products
        </button>
        <button className={`flex-1 py-3 text-center text-sm font-medium ${selectedTab === 'mylistings' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'}`} onClick={() => setSelectedTab('mylistings')}>
          My Listings
        </button>
      </div>
      <div className="p-4">
        {selectedTab === 'upcoming' ? <>
            <p className="text-sm text-gray-600 mb-3">
              Upcoming products from farmers in your area:
            </p>
            {upcomingProducts.map(item => <CalendarItem key={item.id} farmer={item.farmer} product={item.product} price={item.price} quantity={item.quantity} date={item.date} image={item.image} />)}
          </> : <>
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-gray-600">Your product listings:</p>
              <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm">
                Add New
              </button>
            </div>
            {myListings.map(item => <CalendarItem key={item.id} farmer={item.farmer} product={item.product} price={item.price} quantity={item.quantity} date={item.date} image={item.image} />)}
          </>}
      </div>
    </div>;
};
export default CalendarPage;