import Searchbar from "./Searchbar";
import { lazy, Suspense, useState } from "react";
import { useDebounceHook } from "../hooks/useDebounceHook";
const AccordionDropdown = lazy(() => import("./AccordionDropdown"));
const FindIngredients = ({selectedItems, onItemToggle}: SelectedItemProps) => {
    const[searchQuery,setSearchQuery]= useState("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchQuery(e.target.value);
    }
    const debouncedSearchQuery = useDebounceHook(searchQuery,300);
    console.log("Search Query:", searchQuery);
  return (
    <div className="flex flex-col md:w-[40%] bg-gray-50 rounded-2xl p-6 shadow-lg">
      <div className="shrink-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Find Ingredients
        </h2>
        <div className="mb-4">
          <Searchbar searchValue={searchQuery} handleSearchChange={handleSearchChange} />
        </div>
        <div className="flex items-center justify-center bg-white border text-sm border-gray-300 rounded-lg px-4 py-2 shadow-sm mb-4">
          <span className="text-gray-600">Filter ingredients</span>
        </div>
      </div>

      {/* Scrollable accordion area */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="h-full overflow-y-auto pr-2 -mr-2">
        <Suspense fallback={
        <div className="flex items-center justify-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
        </div>
      }>
        <AccordionDropdown 
          selectedItems={selectedItems} 
          onItemToggle={onItemToggle}
          searchQuery={debouncedSearchQuery}
        />
      </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FindIngredients;
