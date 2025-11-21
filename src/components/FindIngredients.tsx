import Searchbar from "./Searchbar";
import AccordionDropdown from "./AccordionDropdown";

const FindIngredients = ({selectedItems, onItemToggle}: SelectedItemProps) => {
  return (
    <div className="flex flex-col md:w-[40%] bg-gray-50 rounded-2xl p-6 shadow-lg">
      <div className="shrink-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Find Ingredients
        </h2>
        <div className="mb-4">
          <Searchbar />
        </div>
        <div className="flex items-center justify-center bg-white border text-sm border-gray-300 rounded-lg px-4 py-2 shadow-sm mb-4">
          <span className="text-gray-600">Filter ingredients</span>
        </div>
      </div>

      {/* Scrollable accordion area */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="h-full overflow-y-auto pr-2 -mr-2">
          <AccordionDropdown selectedItems={selectedItems} onItemToggle={onItemToggle} />
        </div>
      </div>
    </div>
  );
};

export default FindIngredients;
