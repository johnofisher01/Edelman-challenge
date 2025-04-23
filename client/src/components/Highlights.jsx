import React from "react";

const Highlights = ({ mostViewed, mostShared, onSummarize }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* Most Viewed Article */}
      <div className="bg-white shadow rounded border-4 border-blue-500 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            🌟 Most Viewed Article
          </h2>
          {mostViewed ? (
            <>
              <h3 className="text-lg font-semibold text-gray-800">{mostViewed.title}</h3>
              <p className="text-sm text-gray-600 mt-2">Author: {mostViewed.author}</p>
              <p className="text-sm text-gray-600 mt-2">
                {mostViewed.content?.slice(0, 100) || "No content available"}...
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Views: {mostViewed.views} | Shares: {mostViewed.shares}
              </p>
            </>
          ) : (
            <p className="text-gray-600">No article available</p>
          )}
        </div>
      </div>

      {/* Most Shared Article */}
      <div className="bg-white shadow rounded border-4 border-green-500 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-extrabold bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text mb-4">
            🚀 Most Shared Article
          </h2>
          {mostShared ? (
            <>
              <h3 className="text-lg font-semibold text-gray-800">{mostShared.title}</h3>
              <p className="text-sm text-gray-600 mt-2">Author: {mostShared.author}</p>
              <p className="text-sm text-gray-600 mt-2">
                {mostShared.content?.slice(0, 100) || "No content available"}...
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Views: {mostShared.views} | Shares: {mostShared.shares}
              </p>
            </>
          ) : (
            <p className="text-gray-600">No article available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Highlights;