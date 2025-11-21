import useIngredientsHooks from '../../hooks/useIngredientsHooks';

const ItemTag = ({ItemId,onItemToggle}:any) => {
     const{getIngredientNameByid} = useIngredientsHooks();
  return (
     <div className="inline-flex  gap-2 bg-amber-100 text-amber-800 px-3 py-2 rounded-full border border-amber-200">
            <span className="text-sm font-medium">{getIngredientNameByid(ItemId)}</span>
            <img
            src="/public/images/lucide-X-Outlined.svg"
              onClick={() => onItemToggle(ItemId)}  
              className="w-4 h-4 rounded-full hover:bg-amber-200 transition-colors flex items-center justify-center cursor-pointer"
            ></img>
            </div>
  )
}

export default ItemTag
