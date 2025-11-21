interface WelcomeProps {
  onGo: () => void;
}
interface YourPantryProps{
    selectedItems: string[];
    onItemToggle: (itemId: string) => void;
    handleSuggestions :()=> void;
}
type ViewMode = "pantry" | "suggestions";

interface Ingredient {
  id: string;
  name: string;
  image: string | null;
}

interface Category {
  id: string;
  name: string;
  items: Ingredient[];
}


interface RecipeIngredient {
  id: string;
  name: string;
  quantity: string;
}

interface Recipe {
  id: string;
  name: string;
  description: string;
  cookingTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  image: string | null;
  requiredIngredients: RecipeIngredient[];
}

 interface RecipeSuggestion extends Recipe {
  usedIngredients: RecipeIngredient[];
  missingIngredients: RecipeIngredient[];
  matchPercentage: number;
  canMake: boolean;
}
interface SelectedItemProps {
  selectedItems: string[];
  onItemToggle: (itemId: string) => void;
}