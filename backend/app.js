require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const Article = require("./models/articleModel");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);

app.use(express.json());

// Log all incoming requests for debugging
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`, req.query, req.body);
  next();
});

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the Articles Dashboard API!");
});

// Get articles with sorting and pagination
app.get("/articles", async (req, res) => {
  try {
    const { page = 1, limit = 10, author, sort, sortDirection } = req.query;

    // Log received query parameters
    console.log("Received Query Params:", req.query);

    // Validate and construct sorting logic
    const validSortFields = ["views", "shares"];
    const validSortDirections = ["asc", "desc"];
    const sortField = validSortFields.includes(sort) ? sort : "createdAt"; // Default to createdAt
    const direction = validSortDirections.includes(sortDirection?.toLowerCase())
      ? sortDirection.toUpperCase()
      : "DESC"; // Default to DESC
    const order = [[sortField, direction]];

    // Log constructed order clause
    console.log("Final Order Clause:", JSON.stringify(order));

    // Construct filtering logic
    const where = author ? { author } : {};

    // Calculate pagination offsets
    const offset = (parseInt(page) - 1) * parseInt(limit);

    // Query the database
    const { count, rows } = await Article.findAndCountAll({
      where,
      order,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    // Send response
    res.json({
      success: true,
      source: "database",
      total: count,
      currentPage: parseInt(page),
      totalPages: Math.ceil(count / parseInt(limit)),
      hasNextPage: parseInt(page) * parseInt(limit) < count,
      data: rows,
    });
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get article highlights
app.get("/articles/highlights", async (req, res) => {
  try {
    // Fetch the most viewed and most shared articles
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

// Generate a mock summary for an article
app.post("/articles/:id/summarize", async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the article by ID
    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).json({ success: false, message: "Article not found" });
    }

    // Mock summary
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

// Connect to the database and start the server
(async () => {
  try {
    await sequelize.authenticate(); 
    console.log("Database connected successfully!");
    await sequelize.sync({ alter: true }); 
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
})();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});