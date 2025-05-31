import React from 'react';
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}
const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory
}: CategoryFilterProps) => {
  return <div className="px-4 py-3">
      <div className="flex overflow-x-auto space-x-2 pb-2 hide-scrollbar">
        <button className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${selectedCategory === 'All' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'}`} onClick={() => onSelectCategory('All')}>
          All
        </button>
        {categories.map(category => <button key={category} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'}`} onClick={() => onSelectCategory(category)}>
            {category}
          </button>)}
      </div>
    </div>;
};
export default CategoryFilter;