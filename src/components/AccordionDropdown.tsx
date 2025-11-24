import { memo, useEffect, useMemo, useState } from "react";
import ingredientData from "../../public/json/ingredients.json";
import IngredientItem from "./IngredientItem";
import CategorySection from "./CategorySection";


const AccordionDropdown = memo(({selectedItems, onItemToggle, searchQuery}: SelectedItemProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
 
  const filteredCategories = useMemo(()=>{
    if(!searchQuery) return ingredientData.categories;
    const query = searchQuery.toLowerCase().trim();
    return ingredientData.categories.map(category=>({
        ...category,
        items:category.items.filter(item=> item.name.toLowerCase().includes(query))
    }))
    .filter(category=> category.items.length >0);// Remove categories with no matching items

  },[searchQuery]);
  useEffect(()=>{
   if(searchQuery?.trim() && filteredCategories.length >0){
    setExpandedId(filteredCategories[0].id);
   }else {
     setExpandedId(null);
   }
  },[searchQuery, filteredCategories]);
  return (
    <>
    <div className="max-w-2xl mx-auto">
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category) => {
          const isExpanded = expandedId === category.id;
          return (
            <div key={category.id} className="mb-2 border border-gray-200 rounded-lg">
              <div
                className="flex flex-row justify-between items-center cursor-pointer p-4 hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setExpandedId(isExpanded ? null : category.id)
                }
              >
               <CategorySection category={category}/>
                <img
                  src="/images/ChevronDown.svg" // Remove "public" from path
                  alt={isExpanded ? "Collapse" : "Expand"}
                  className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              
              {isExpanded && (
               <IngredientItem category={category} selectedItems={selectedItems} onItemToggle={onItemToggle} />
              )}
            </div>
          );
        })
      ) : (
        // Show when no results found
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">No ingredients found</h3>
          <p className="text-gray-500">No ingredients match "{searchQuery}"</p>
        </div>
      )}
    </div>
    </>
  );
});

export default AccordionDropdown;
