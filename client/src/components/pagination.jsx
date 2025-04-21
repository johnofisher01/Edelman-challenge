import React from "react";

const Pagination = ({ page, setPage, total }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2">{page}</span>
      <button
        disabled={page * 5 >= total}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;