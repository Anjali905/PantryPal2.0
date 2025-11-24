const CategorySection = ({ category }: any) => {
  return (
    <div className="flex items-center gap-3">
      <h3 className="font-semibold text-gray-800">{category.name}</h3>
      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
        {category.items.length} items
      </span>
    </div>
  );
};

export default CategorySection;
