import React, { useState, useEffect } from "react";
import Highlights from "../components/Highlights";
import FilterSortBar from "../components/FilterSortBar";
import ArticleCard from "../components/ArticleCard";
import Pagination from "../components/Pagination";
import { fetchArticles } from "../services/api";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ author: "", sort: "" });

  useEffect(() => {
    fetchArticles({ page, ...filters }).then(setArticles);
  }, [page, filters]);

  return (
    <div className="container mx-auto p-4">
      <Highlights />
      <FilterSortBar onFilterChange={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <Pagination total={50} page={page} onPageChange={setPage} />
    </div>
  );
};

export default Dashboard;