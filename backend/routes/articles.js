const express = require("express");
const { Op } = require("sequelize");
const Article = require("../models/articleModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10, author, sortBy } = req.query;

    const validSortFields = ["views", "shares", "createdAt", "updatedAt"]; 
    const order = validSortFields.includes(sortBy) ? [[sortBy, "DESC"]] : [["createdAt", "DESC"]]; 

    const offset = (parseInt(page) - 1) * parseInt(limit); 
    const where = author ? { author: { [Op.iLike]: `%${author}%` } } : {}; 

    const { count, rows } = await Article.findAndCountAll({
      where,
      order,
      limit: parseInt(limit),
      offset: offset,
    });

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

module.exports = router;