const express = require("express");
const { Op } = require("sequelize");
const Article = require("../models/articleModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("Received Query Params:", req.query); 

    const { page = 1, limit = 10, author, sort, sortDirection } = req.query;

    const validSortFields = ["views", "shares"];
    const order = validSortFields.includes(sort)
      ? [[sort, sortDirection === "asc" ? "ASC" : "DESC"]]
      : [["createdAt", "DESC"]];

    console.log("Final Order Clause:", JSON.stringify(order)); 

    const where = author ? { author: { [Op.iLike]: `%${author}%` } } : {};

    const offset = (parseInt(page) - 1) * parseInt(limit);

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