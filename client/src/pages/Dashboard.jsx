import React, { useState, useEffect } from "react";
import Highlights from "../components/Highlights";
import FilterSortBar from "../components/FilterSortBar";
import ArticleList from "../components/ArticleList";
import Pagination from "../components/Pagination";
import SummaryModal from "../components/SummaryModal";
import { fetchArticles, fetchHighlights, fetchSummary } from "../services/api";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [highlights, setHighlights] = useState({ mostViewed: null, mostShared: null });
  const [filters, setFilters] = useState({ author: "", sort: "" });
  const [page, setPage] = useState(1);
  const [summary, setSummary] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchArticles({ page, ...filters }).then(setArticles);
  }, [page, filters]);

  useEffect(() => {
    fetchHighlights().then(setHighlights);
  }, [filters.author]);

  const handleSummarize = async (articleId) => {
    const summaryData = await fetchSummary(articleId);
    setSummary(summaryData);
    setModalOpen(true);
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 h-screen">{/* Global Header */}</div>
      <div className="w-3/4 p-4">
        <Highlights mostViewed={highlights.mostViewed} mostShared={highlights.mostShared} />
        <FilterSortBar filters={filters} setFilters={setFilters} />
        <ArticleList articles={articles} onSummarize={handleSummarize} />
        <Pagination total={50} page={page} onPageChange={setPage} />
        <SummaryModal open={modalOpen} onClose={() => setModalOpen(false)} summary={summary} />
      </div>
    </div>
  );
};

export default Dashboard;