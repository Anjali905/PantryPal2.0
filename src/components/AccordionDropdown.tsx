import { useState } from "react";
import ingredientData from "../../public/json/ingredients.json";

const AccordionDropdown = ({selectedItems, onItemToggle}: SelectedItemProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
 
  return (
    <>
      <div className="max-w-2xl mx-auto">
        {ingredientData.categories.map((category) => (
          <div key={category.id}>
            <div
              className="flex flex-row justify-between cursor-pointer p-4"
              onClick={() =>
                setExpandedId(expandedId === category.id ? null : category.id)
              }
            >
              <h3>{category.name}</h3>
               <img
                src="/public/images/ChevronDown.svg"
                alt={expandedId === category.id ? "Collapse" : "Expand"}
                className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                  expandedId === category.id ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {expandedId === category.id && (
              <div className="p-2">
                {category.items.map((item) => (
                  <label key={item.id} className="flex gap-2">
                    <input type="checkbox" className="cursor-pointer"
                    checked={selectedItems.includes(item.id)}
                    onChange={()=>onItemToggle(item.id)}/>
                    <span>{item.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AccordionDropdown;
