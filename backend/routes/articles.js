const { Op } = require("sequelize");
const Article = require("../models/articleModel");

router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10, author, sortBy } = req.query;

    const where = author ? { author: { [Op.iLike]: `%${author}%` } } : {}; 
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