import { CTAButton } from "../button/CTAButton";
import ItemTag from "../Tags/ItemTag";

const YourPantry = ({
  selectedItems,
  onItemToggle,
  handleSuggestions,
}: YourPantryProps) => {
  return (
    <div className="flex flex-col md:w-[60%] bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Pantry</h2>
      <div className="flex-1 flex  border-2 border-dashed border-gray-300 rounded-xl p-4">
        <div className="min-h-full">
          {selectedItems.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {selectedItems.map((itemId) => (
                <ItemTag key={itemId} ItemId={itemId} onItemToggle={onItemToggle} />
              ))}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500 text-lg text-center">
                Select ingredients from the left to add to your pantry
              </p>
            </div>
          )}
        </div>
      </div>

      <CTAButton onClick={handleSuggestions}>What can i cook?</CTAButton>
    </div>
  );
};

export default YourPantry;
