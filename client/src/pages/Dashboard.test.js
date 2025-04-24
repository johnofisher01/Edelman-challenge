import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Dashboard from "./Dashboard";
import * as api from "../api"; // Mock your API

jest.mock("../api");

const mockArticles = [
  { title: "Article 1", author: "Author 1", views: 100, shares: 10 },
  { title: "Article 2", author: "Author 2", views: 200, shares: 20 },
];

const mockHighlights = {
  mostViewed: { title: "Most Viewed Article", author: "Author Most Viewed", views: 500, shares: 50 },
  mostShared: { title: "Most Shared Article", author: "Author Most Shared", views: 400, shares: 60 },
};

describe("Dashboard Component", () => {
  test("handles pagination", async () => {
    api.fetchArticles.mockResolvedValueOnce(mockArticles);
    api.fetchHighlights.mockResolvedValueOnce(mockHighlights);

    render(<Dashboard />);

    // Wait for the first page to load
    await waitFor(() => expect(api.fetchArticles).toHaveBeenCalledTimes(1));

    // Find and click the "Go to page 2" button
    const nextPageButton = await screen.findByRole("button", { name: "2" });
    fireEvent.click(nextPageButton);

    // Verify the API is called with the updated page
    expect(api.fetchArticles).toHaveBeenCalledWith(expect.objectContaining({ page: 2 }));
  });

  test("handles summarizing an article", async () => {
    api.fetchArticles.mockResolvedValueOnce(mockArticles);

    render(<Dashboard />);

    // Wait for articles to load
    await waitFor(() => expect(api.fetchArticles).toHaveBeenCalledTimes(1));

    // Handle multiple "Summarise" buttons
    const summarizeButtons = screen.getAllByRole("button", { name: "Summarise" });
    fireEvent.click(summarizeButtons[0]);

    // Verify the API is called
    expect(api.fetchSummary).toHaveBeenCalled();
  });

  test("displays fallback content for empty highlights", async () => {
    api.fetchHighlights.mockResolvedValueOnce({ mostViewed: null, mostShared: null });

    render(<Dashboard />);

    // Wait for highlights to load
    await waitFor(() => expect(api.fetchHighlights).toHaveBeenCalledTimes(1));

    // Use getAllByText for multiple matching elements
    const fallbackTexts = screen.getAllByText("No article available");
    expect(fallbackTexts.length).toBeGreaterThan(0);
  });
});