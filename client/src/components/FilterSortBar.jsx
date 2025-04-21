import React from "react";
import { Box, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const FilterSortBar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
      <FormControl sx={{ minWidth: 120 }}>
        <TextField
          name="author"
          label="Filter by Author"
          value={filters.author}
          onChange={handleFilterChange}
        />
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          name="sort"
          value={filters.sort}
          onChange={handleFilterChange}
        >
          <MenuItem value="views">Views</MenuItem>
          <MenuItem value="shares">Shares</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSortBar;