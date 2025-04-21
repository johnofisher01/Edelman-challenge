import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles, onSummarize }) => {
  if (articles.length === 0) {
    return <p>No articles available.</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onSummarize={onSummarize}
        />
      ))}
    </div>
  );
};

export default ArticleList;