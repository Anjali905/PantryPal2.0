
const Searchbar = () => {
  return (
   <div className="flex flex-col gap-4">
      <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
        {/* Search icon */}
        <svg className="w-5 h-5 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <input
          id="pantry-search"
          type="search"
          value="searchValue"
          onChange={()=>{}}
          placeholder={"Search ingredients..."}
          className="ml-3 w-full bg-transparent text-sm placeholder-gray-400 focus:outline-none"
          aria-label="Search ingredients"
        />

      </div>
    
    
    </div>
  )
}

export default Searchbar
