import React from "react";

const FilterSortBar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
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
        <option value="">Sort By</option>
        <option value="views">Views</option>
        <option value="shares">Shares</option>
      </select>
    </div>
  );
};

export default FilterSortBar;