import React from "react";

const FilterSortBar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortDirectionChange = (direction) => {
    setFilters({ ...filters, sortDirection: direction });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
      <input
        name="author"
        type="text"
        placeholder="Filter by Author"
        value={filters.author}
        onChange={handleFilterChange}
        className="w-full md:w-1/3 border rounded px-3 py-2"
      />
      <select
        name="sort"
        value={filters.sort}
        onChange={handleFilterChange}
        className="w-full md:w-1/3 border rounded px-3 py-2"
      >
        <option value="views">Views</option>
        <option value="shares">Shares</option>
      </select>
      {filters.sort && (
        <div className="flex gap-2">
          <button
            onClick={() => handleSortDirectionChange("asc")}
            className={`px-4 py-2 border rounded ${
              filters.sortDirection === "asc"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Ascending
          </button>
          <button
            onClick={() => handleSortDirectionChange("desc")}
            className={`px-4 py-2 border rounded ${
              filters.sortDirection === "desc"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Descending
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterSortBar;
