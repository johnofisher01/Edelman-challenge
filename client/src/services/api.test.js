import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchArticles, fetchHighlights, fetchSummary } from "./api";

const API_BASE_URL = "http://localhost:3000";

describe("API Tests", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  test("fetchArticles makes a GET request with correct parameters", async () => {
    const mockData = [
      { id: 1, title: "Article 1", author: "Author 1" },
      { id: 2, title: "Article 2", author: "Author 2" },
    ];

    const params = { page: 1, filter: "Author", sort: "views" };
    mock.onGet(`${API_BASE_URL}/articles`, { params }).reply(200, mockData);

    const response = await fetchArticles(params);

    expect(response).toEqual(mockData);
    expect(mock.history.get.length).toBe(1);
    expect(mock.history.get[0].url).toBe(`${API_BASE_URL}/articles`);
    expect(mock.history.get[0].params).toEqual(params);
  });

  test("fetchHighlights makes a GET request and returns data", async () => {
    const mockData = {
      mostViewed: { title: "Most Viewed Article", author: "Author 1", views: 500 },
      mostShared: { title: "Most Shared Article", author: "Author 2", shares: 100 },
    };

    mock.onGet(`${API_BASE_URL}/articles/highlights`).reply(200, mockData);

    const response = await fetchHighlights();

    expect(response).toEqual(mockData);
    expect(mock.history.get.length).toBe(1);
    expect(mock.history.get[0].url).toBe(`${API_BASE_URL}/articles/highlights`);
  });

  test("fetchSummary makes a POST request with correct article ID", async () => {
    const mockData = { summary: "This is a summary of the article." };
    const articleId = 1;

    mock.onPost(`${API_BASE_URL}/articles/${articleId}/summarize`).reply(200, mockData);

    const response = await fetchSummary(articleId);

    expect(response).toEqual(mockData.summary);
    expect(mock.history.post.length).toBe(1);
    expect(mock.history.post[0].url).toBe(`${API_BASE_URL}/articles/${articleId}/summarize`);
  });

  test("fetchArticles handles errors gracefully", async () => {
    const params = { page: 1, filter: "Author", sort: "views" };
    mock.onGet(`${API_BASE_URL}/articles`, { params }).reply(500);

    await expect(fetchArticles(params)).rejects.toThrow("Request failed with status code 500");

    expect(mock.history.get.length).toBe(1);
  });

  test("fetchSummary handles errors gracefully", async () => {
    const articleId = 1;
    mock.onPost(`${API_BASE_URL}/articles/${articleId}/summarize`).reply(404);

    await expect(fetchSummary(articleId)).rejects.toThrow("Request failed with status code 404");

    expect(mock.history.post.length).toBe(1);
  });
});