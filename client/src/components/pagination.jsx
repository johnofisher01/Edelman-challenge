import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ total, page, onPageChange }) => {
  const handleChange = (_, value) => {
    onPageChange(value);
  };

  return (
    <MuiPagination
      count={Math.ceil(total / 10)}
      page={page}
      onChange={handleChange}
      sx={{ marginTop: 2 }}
    />
  );
};

export default Pagination;