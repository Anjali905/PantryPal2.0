import { useCallback, useMemo } from "react";
import data from "../../public/json/ingredients.json";
function useIngredientsHooks() {
  const ingredientData = data;
  const ingredientMap = useMemo(() => {
    const map: { [key: string]: string } = {};
    ingredientData.categories.forEach((category) => {
      category.items.forEach((item) => {
        map[item.id] = item.name;
      });
    });
    console.log("Map",map);
    return map;
  }, [ingredientData]);

  const getIngredientNameByid = useCallback(
    (id: string): string => {
        console
      return ingredientMap[id] || "Unknown Ingredient";
    },
    [ingredientMap]
  );
  return { getIngredientNameByid, ingredientData };
}

export default useIngredientsHooks;
