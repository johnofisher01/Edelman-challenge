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
  const [filters, setFilters] = useState({ author: "", sort: "", sortDirection: "desc" });
  const [page, setPage] = useState(1);
  const [summary, setSummary] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log("Filters changed:", filters); // Debug log
    fetchArticles({ page, ...filters })
      .then((response) => setArticles(response.data || []))
      .catch((error) => {
        console.error("Error fetching articles:", error.message);
        setArticles([]);
      });
  }, [page, filters]);

  useEffect(() => {
    fetchHighlights()
      .then((response) => setHighlights(response || { mostViewed: null, mostShared: null }))
      .catch((error) => {
        console.error("Error fetching highlights:", error.message);
        setHighlights({ mostViewed: null, mostShared: null });
      });
  }, [filters.author]);

  const handleSummarize = async (articleId) => {
    try {
      const summaryData = await fetchSummary(articleId);
      setSummary(summaryData);
      setModalOpen(true);
    } catch (error) {
      console.error("Error summarizing article:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-6">
        <Highlights mostViewed={highlights.mostViewed} mostShared={highlights.mostShared} />
        <FilterSortBar filters={filters} setFilters={setFilters} />
        <ArticleList articles={articles} onSummarize={handleSummarize} />
        <Pagination total={50} page={page} onPageChange={setPage} />
        <SummaryModal open={modalOpen} onClose={() => setModalOpen(false)} summary={summary} />
      </main>
    </div>
  );
};

export default Dashboard;