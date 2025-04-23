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

app.get("/", (req, res) => {
  res.send("Welcome to the Articles Dashboard API!");
});

app.get("/articles", async (req, res) => {
  try {
    const { page = 1, limit = 10, author, sortBy } = req.query;

    const where = author ? { author } : {};

    const order = sortBy ? [[sortBy, "DESC"]] : [];
    
    const offset = (page - 1) * limit;

   
    const { count, rows } = await Article.findAndCountAll({
      where,
      order,
      limit: parseInt(limit), 
      offset: parseInt(offset), 
    });

    res.json({
      success: true,
      source: "database",
      total: count,
      currentPage: parseInt(page),
      totalPages: Math.ceil(count / limit),
      hasNextPage: page * limit < count,
      data: rows,
    });
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

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