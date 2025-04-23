const express = require("express");
const { Op } = require("sequelize");
const Article = require("../models/articleModel");
const router = express.Router();

router.get("/highlights", async (req, res) => {
  try {
    const mostViewed = await Article.findOne({ order: [["views", "DESC"]] });
    const mostShared = await Article.findOne({ order: [["shares", "DESC"]] });

    res.json({
      success: true,
      mostViewed,
      mostShared,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
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
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.post("/:id/summarize", async (req, res) => {
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
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;