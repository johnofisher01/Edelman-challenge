import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchArticles = async (params) => {
  console.log("API Call Params:", params); // Debug log
  const response = await axios.get(`${API_BASE_URL}/articles`, { params });
  return response.data;
};

export const fetchHighlights = async () => {
  const response = await axios.get(`${API_BASE_URL}/articles/highlights`);
  return response.data;
};

// Update fetchSummary to use POST instead of GET
export const fetchSummary = async (articleId) => {
  const response = await axios.post(`${API_BASE_URL}/articles/${articleId}/summarize`);
  return response.data.summary;
};