import React from "react";

const ArticleCard = ({ article, onSummarize }) => {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
        <p className="text-sm text-gray-600 mt-2">Author: {article.author}</p>
        <p className="text-sm text-gray-600 mt-2">{article.content.slice(0, 100)}...</p>
        <p className="text-sm text-gray-600 mt-2">
          Views: {article.views} | Shares: {article.shares}
        </p>
      </div>
      <button
        onClick={() => onSummarize(article.id)}
        className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
      >
        Summarise
      </button>
    </div>
  );
};

export default ArticleCard;