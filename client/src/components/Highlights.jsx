import React from "react";

const Highlights = ({ mostViewed, mostShared }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Most Viewed Article</h2>
        <p className="text-gray-600">{mostViewed?.title || "N/A"}</p>
      </div>
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Most Shared Article</h2>
        <p className="text-gray-600">{mostShared?.title || "N/A"}</p>
      </div>
    </div>
  );
};

export default Highlights;