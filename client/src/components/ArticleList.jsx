import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/api";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

const ArticleList = ({ filters, sortBy }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles({ ...filters, sortBy, page });
      setArticles(data.data);
      setTotal(data.total);
    };
    getArticles();
  }, [filters, sortBy, page]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} total={total} />
    </div>
  );
};

export default ArticleList;