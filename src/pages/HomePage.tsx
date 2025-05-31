import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import LocationFilter from '../components/LocationFilter';
import FarmerCard from '../components/FarmerCard';
const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['Vegetables', 'Fruits', 'Poultry', 'Fishery', 'Palm Oil', 'Cassava', 'Yam'];
  const farmers = [{
    id: 1,
    name: 'Adamu Farms',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    location: 'Asaba, Delta State',
    rating: 4.8,
    products: ['Cassava', 'Yam', 'Vegetables'],
    distance: '3.2 km away'
  }, {
    id: 2,
    name: 'Green Acres',
    image: 'https://images.unsplash.com/photo-1592878849122-facb97520f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    location: 'Warri, Delta State',
    rating: 4.5,
    products: ['Poultry', 'Eggs'],
    distance: '5.7 km away'
  }, {
    id: 3,
    name: 'Delta Fisheries',
    image: 'https://images.unsplash.com/photo-1535090042247-30387644aec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpc2hlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    location: 'Sapele, Delta State',
    rating: 4.7,
    products: ['Fish', 'Seafood'],
    distance: '8.1 km away'
  }, {
    id: 4,
    name: 'Palm Valley',
    image: 'https://images.unsplash.com/photo-1598715685267-0f45367d8071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsbSUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    location: 'Ughelli, Delta State',
    rating: 4.6,
    products: ['Palm Oil', 'Palm Kernel'],
    distance: '12.3 km away'
  }];
  return <div className="bg-gray-50 min-h-screen">
      <Header title="FarmConnect" showSearch={true} />
      <div className="flex justify-between items-center px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Find Local Farmers
        </h2>
        <Link to="/register" className="bg-green-600 text-white p-2 rounded-full">
          <PlusIcon size={20} />
        </Link>
      </div>
      <LocationFilter />
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <div className="px-4 py-2">
        {farmers.map(farmer => <FarmerCard key={farmer.id} name={farmer.name} image={farmer.image} location={farmer.location} rating={farmer.rating} products={farmer.products} distance={farmer.distance} />)}
      </div>
    </div>;
};
export default HomePage;