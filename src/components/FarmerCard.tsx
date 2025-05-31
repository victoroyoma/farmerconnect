import React from 'react';
import { StarIcon, MapPinIcon } from 'lucide-react';
interface FarmerCardProps {
  name: string;
  image: string;
  location: string;
  rating: number;
  products: string[];
  distance: string;
}
const FarmerCard = ({
  name,
  image,
  location,
  rating,
  products,
  distance
}: FarmerCardProps) => {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
      <div className="flex">
        <div className="w-24 h-24">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-3 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <div className="flex items-center">
              <StarIcon size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm ml-1">{rating}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-600 text-xs mt-1">
            <MapPinIcon size={14} className="mr-1" />
            <span>{location}</span>
            <span className="mx-1">•</span>
            <span>{distance}</span>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap gap-1">
              {products.map((product, index) => <span key={index} className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                  {product}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default FarmerCard;