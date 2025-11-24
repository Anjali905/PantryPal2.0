
const IngredientItem = ({category, selectedItems, onItemToggle}:any) => {
  return (
     <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.items.map((item: any) => (
                      <label 
                        key={item.id} 
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-amber-50 hover:border-amber-200 transition-colors"
                      >
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500 cursor-pointer"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => onItemToggle(item.id)}
                        />
                        <span className="text-gray-700 font-medium">{item.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
  )
}

export default IngredientItem
