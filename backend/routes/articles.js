const express = require("express");
const { setCache, getCache } = require("../utils/cache");
const Article = require("../models/articleModel"); 
const router = express.Router();

router.get("/", async (req, res) => {
  try {

    const cachedArticles = await getCache("articles");
    if (cachedArticles) {
      return res.json({ source: "cache", data: cachedArticles });
    }

    const articles = await Article.findAll();

    await setCache("articles", articles, 3600); 

    res.json({ source: "database", data: articles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;