const express = require("express");
const { Op } = require("sequelize"); // Sequelize operators for filtering
const { setCache, getCache } = require("../utils/cache");
const Article = require("../models/articleModel"); 
const router = express.Router();

router.get("/highlights", async (req, res) => {
  console.log("Highlights endpoint hit");

  try {
    const cachedHighlights = await getCache("highlights");
    if (cachedHighlights) {
      return res.json({ source: "cache", data: cachedHighlights });
    }

    const mostViewed = await Article.findOne({ order: [["views", "DESC"]] });
    const mostShared = await Article.findOne({ order: [["shares", "DESC"]] });

    const highlights = { mostViewed, mostShared };

    await setCache("highlights", highlights, 3600);

    res.json({ source: "database", data: highlights });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { filterBy, filterValue, sortBy, order = "asc", page = 1, limit = 10 } = req.query;

    const cacheKey = `articles_${filterBy || "all"}_${filterValue || "all"}_${sortBy || "none"}_${order}_${page}_${limit}`;
    const cachedArticles = await getCache(cacheKey);
    if (cachedArticles) {
      return res.json({ source: "cache", data: cachedArticles });
    }

    const whereClause = {};
    if (filterBy && filterValue) {
      whereClause[filterBy] = { [Op.like]: `%${filterValue}%` };
    }

    const sortClause = sortBy ? [[sortBy, order.toUpperCase()]] : [];

    const offset = (page - 1) * limit;

    const articles = await Article.findAndCountAll({
      where: whereClause,
      order: sortClause,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    const result = {
      total: articles.count,
      page: parseInt(page),
      pages: Math.ceil(articles.count / limit),
      data: articles.rows,
    };

    await setCache(cacheKey, result, 3600);

    res.json({ source: "database", data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id/summary", async (req, res) => {
  try {
    const { id } = req.params;

    const cacheKey = `article_summary_${id}`;
    const cachedSummary = await getCache(cacheKey);
    if (cachedSummary) {
      return res.json({ source: "cache", data: cachedSummary });
    }

    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    const summary = article.content.split(" ").slice(0, 50).join(" ") + "...";

    const result = { id: article.id, title: article.title, summary };

    await setCache(cacheKey, result, 3600);

    res.json({ source: "database", data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;