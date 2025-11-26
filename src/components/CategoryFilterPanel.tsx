// CategoryFilterPanel.tsx
import { memo } from "react";
import ingredientData from "../../public/json/ingredients.json";

interface CategoryFilterPanelProps {
  selectedCategory: any;
  onCategorySelect: any;
}

// Category icons mapping based on your categories
const categoryIcons: { [key: string]: string } = {
  vegetables: "🥕",
  fruits: "🍎",
  "dairy-eggs": "🥛",
  "meat-poultry": "🍗",
  "grains-pasta": "🍞",
  "spices-herbs": "🌿"
};

const categoryColors: { [key: string]: string } = {
  vegetables: "bg-green-100 border-green-200 text-green-700",
  fruits: "bg-red-100 border-red-200 text-red-700",
  "dairy-eggs": "bg-yellow-100 border-yellow-200 text-yellow-700",
  "meat-poultry": "bg-red-100 border-red-200 text-red-700",
  "grains-pasta": "bg-amber-100 border-amber-200 text-amber-700",
  "spices-herbs": "bg-lime-100 border-lime-200 text-lime-700"
};

const CategoryFilterPanel = memo(({ 
  selectedCategory, 
  onCategorySelect 
}: CategoryFilterPanelProps) => {
  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      onCategorySelect(null);
    } else {
      onCategorySelect(categoryId);
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Category</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ingredientData.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`
              flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-200
              hover:shadow-md hover:scale-105 active:scale-95
              ${selectedCategory === category.id 
                ? `${categoryColors[category.id]} border-amber-400 shadow-md scale-105` 
                : 'bg-white border-gray-200 hover:border-gray-300'
              }
            `}
          >
            <div className="text-2xl mb-2">{categoryIcons[category.id]}</div>
            <span className="text-sm font-medium text-center leading-tight">
              {category.name}
            </span>
          </button>
        ))}
        
        {/* Clear filter button */}
        {selectedCategory && (
          <button
            onClick={() => onCategorySelect(null)}
            className="flex flex-col items-center p-3 rounded-xl border-2 border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 col-span-2 sm:col-span-3"
          >
            <div className="text-xl mb-2">❌</div>
            <span className="text-sm font-medium">Clear Filter</span>
          </button>
        )}
      </div>
    </div>
  );
});

export default CategoryFilterPanel;