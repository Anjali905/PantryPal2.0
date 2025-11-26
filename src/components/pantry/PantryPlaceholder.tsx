import { lazy, Suspense, useState } from "react";
import FindIngredients from "../FindIngredients";
import YourPantry from "./YourPantry";
const RecipeSuggestions = lazy(() => import("../recipe/RecipeSuggestions"));
export default function PantryPlaceholder() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<ViewMode>("pantry");

  const handleSuggestion = () => {
    setActiveView("suggestions");
  };
  const handleToggleItem = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 min-h-screen p-6">
      {/* Left Panel */}
      <FindIngredients
        selectedItems={selectedItems}
        onItemToggle={handleToggleItem}
      />
      {/* Right Panel */}
      <>
        {activeView === "pantry" ? (
          <YourPantry
            selectedItems={selectedItems}
            onItemToggle={handleToggleItem}
            handleSuggestions={handleSuggestion}
          />
        ) : (
          <Suspense fallback={<div>Loading recipes...</div>}>
            <RecipeSuggestions />
          </Suspense>
        )}
      </>
    </div>
  );
}
