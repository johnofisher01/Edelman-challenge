require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const Article = require("./models/articleModel");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend origin
    credentials: true, // If you need to include cookies or authentication
  })
);

// Middleware to parse JSON
app.use(express.json());

// Healthcheck Endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Articles Dashboard API!");
});

// Get Paginated Articles with Filters and Sorting
app.get("/articles", async (req, res) => {
  try {
    const { page = 1, limit = 10, author, sortBy } = req.query;

    const where = author ? { author } : {};
    const order = sortBy ? [[sortBy, "DESC"]] : [];

    const { count, rows } = await Article.findAndCountAll({
      where,
      order,
      limit: parseInt(limit),
      offset: (page - 1) * limit,
    });

    res.json({
      success: true,
      source: "database",
      total: count,
      data: rows,
    });
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get Highlights: Most Viewed and Most Shared Articles
app.get("/articles/highlights", async (req, res) => {
  try {
    const mostViewed = await Article.findOne({ order: [["views", "DESC"]] });
    const mostShared = await Article.findOne({ order: [["shares", "DESC"]] });

    res.json({
      success: true,
      mostViewed,
      mostShared,
    });
  } catch (error) {
    console.error("Error fetching highlights:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Generate a Mock Summary for a Specific Article
app.post("/articles/:id/summarize", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ success: false, message: "Article not found" });
    }

    const mockSummary = `This is a mocked summary for the article titled "${article.title}" by ${article.author}.`;

    res.json({
      success: true,
      summary: mockSummary,
    });
  } catch (error) {
    console.error("Error generating summary:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Database Initialization and Sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
})();

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});