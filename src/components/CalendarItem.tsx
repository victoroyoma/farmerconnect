import React from 'react';
import { CalendarIcon, ChevronRightIcon } from 'lucide-react';
interface CalendarItemProps {
  farmer: string;
  product: string;
  price: string;
  quantity: string;
  date: string;
  image: string;
}
const CalendarItem = ({
  farmer,
  product,
  price,
  quantity,
  date,
  image
}: CalendarItemProps) => {
  return <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={image} alt={farmer} className="w-12 h-12 rounded-full object-cover mr-3" />
          <div>
            <h3 className="font-medium text-gray-800">{farmer}</h3>
            <p className="text-sm text-gray-600">{product}</p>
          </div>
        </div>
        <ChevronRightIcon size={20} className="text-gray-400" />
      </div>
      <div className="flex justify-between mt-3 pt-3 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500">Price</p>
          <p className="font-medium text-gray-800">{price}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Quantity</p>
          <p className="font-medium text-gray-800">{quantity}</p>
        </div>
        <div className="flex items-center">
          <CalendarIcon size={16} className="text-green-600 mr-1" />
          <span className="text-sm text-gray-700">{date}</span>
        </div>
      </div>
      <button className="mt-3 w-full py-2 bg-green-600 text-white rounded-lg text-sm font-medium">
        Express Interest
      </button>
    </div>;
};
export default CalendarItem;