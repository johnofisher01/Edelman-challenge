import React, { useEffect, useState } from "react";
import * as api from "../api";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [highlights, setHighlights] = useState({ mostViewed: null, mostShared: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.fetchArticles({ page: currentPage, filter, sort });
        setArticles(response);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };
    fetchArticles();
  }, [currentPage, filter, sort]);

  useEffect(() => {
    // Fetch highlights on component mount
    const fetchHighlights = async () => {
      try {
        const response = await api.fetchHighlights();
        setHighlights(response);
      } catch (error) {
        console.error("Failed to fetch highlights:", error);
      }
    };
    fetchHighlights();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

    return (
      <nav aria-label="pagination navigation" className="pagination">
        <ul className="pagination-list">
          <li>
            <button
              aria-label="Go to previous page"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <button
                aria-label={`Go to page ${index + 1}`}
                aria-current={currentPage === index + 1 ? "page" : null}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              aria-label="Go to next page"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  const renderHighlights = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="highlight-card">
          <h2>Most Viewed Article</h2>
          {highlights.mostViewed ? (
            <div>
              <h3>{highlights.mostViewed.title}</h3>
              <p>Author: {highlights.mostViewed.author}</p>
              <p>Views: {highlights.mostViewed.views} | Shares: {highlights.mostViewed.shares}</p>
            </div>
          ) : (
            <p>No article available</p>
          )}
        </div>
        <div className="highlight-card">
          <h2>Most Shared Article</h2>
          {highlights.mostShared ? (
            <div>
              <h3>{highlights.mostShared.title}</h3>
              <p>Author: {highlights.mostShared.author}</p>
              <p>Views: {highlights.mostShared.views} | Shares: {highlights.mostShared.shares}</p>
            </div>
          ) : (
            <p>No article available</p>
          )}
        </div>
      </div>
    );
  };

  const renderArticles = () => {
    if (articles.length === 0) {
      return <p>No articles available.</p>;
    }

    return (
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <p>Views: {article.views} | Shares: {article.shares}</p>
            <button onClick={() => api.fetchSummary(article.id)}>Summarise</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Dashboard</h1>
      </header>
      {renderHighlights()}
      <div className="filters">
        <div>
          <label htmlFor="author">Filter by Author</label>
          <input
            id="author"
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Enter author name"
          />
        </div>
        <div>
          <label htmlFor="sort">Sort By</label>
          <select id="sort" value={sort} onChange={handleSortChange}>
            <option value="" disabled>
              Select an option
            </option>
            <option value="views">Views</option>
            <option value="shares">Shares</option>
          </select>
        </div>
      </div>
      <main>
        {renderArticles()}
        {renderPagination()}
      </main>
    </div>
  );
};

export default Dashboard;