import React, { useState } from 'react';
import { MapPinIcon, ChevronDownIcon } from 'lucide-react';
const LocationFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const locations = ['All Locations', 'Asaba', 'Warri', 'Ughelli', 'Sapele', 'Agbor'];
  return <div className="px-4 py-2 relative">
      <button className="flex items-center space-x-1 text-sm font-medium text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        <MapPinIcon size={18} className="text-green-600" />
        <span>{selectedLocation}</span>
        <ChevronDownIcon size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md border border-gray-200 w-48">
          {locations.map(location => <button key={location} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={() => {
        setSelectedLocation(location);
        setIsOpen(false);
      }}>
              {location}
            </button>)}
        </div>}
    </div>;
};
export default LocationFilter;