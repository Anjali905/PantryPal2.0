import Searchbar from "./Searchbar";
import { lazy, Suspense, useState } from "react";
import { useDebounceHook } from "../hooks/useDebounceHook";
import CategoryFilterPanel from "./CategoryFilterPanel";
const AccordionDropdown = lazy(() => import("./AccordionDropdown"));
const FindIngredients = ({
  selectedItems,
  onItemToggle,
}: SelectedItemProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterClicked, setFilterClicked] = useState(false);
  const[selectedCategory, setSelectedCategory]= useState<string | null>(null);
  const handleFilterClick = () => {
    setFilterClicked(!filterClicked);
  };
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  }
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const debouncedSearchQuery = useDebounceHook(searchQuery, 300);
  console.log("Search Query:", searchQuery);
  return (
    <div className="flex flex-col md:w-[40%] bg-gray-50 rounded-2xl p-6 shadow-lg">
      <div className="shrink-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Find Ingredients
        </h2>

        {/* Fixed Search + Filter Row */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1">
            <Searchbar
              searchValue={searchQuery}
              handleSearchChange={handleSearchChange}
            />
          </div>
          <button
            className="flex items-center cursor-pointer justify-center bg-white rounded-xl border border-gray-200 w-10 h-10 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2"
            aria-label="Filter ingredients"
            onClick={handleFilterClick}
          >
            <img src="/images/filter.svg" alt="Filter" className="w-5 h-5" />
          </button>
        </div>
      </div>
      {filterClicked ? (
        <CategoryFilterPanel onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
      ) : (
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="h-full overflow-y-auto pr-2 -mr-2">
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
                </div>
              }
            >
              <AccordionDropdown
                selectedItems={selectedItems}
                onItemToggle={onItemToggle}
                searchQuery={debouncedSearchQuery}
                selectedCategory={selectedCategory}
              />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindIngredients;
