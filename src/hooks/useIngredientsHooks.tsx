import { useCallback, useMemo, useState } from "react";
import data from "../../public/json/ingredients.json";
function useIngredientsHooks() {
  const [ingredientData] = useState(data);
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
        console.log("Getting name for ID:", id, "->", ingredientMap[id]);
      return ingredientMap[id] || id;
    },
    [ingredientMap]
  );
  return { getIngredientNameByid, ingredientData };
}

export default useIngredientsHooks;
