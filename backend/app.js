require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const articleRoutes = require("./routes/articles");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use("/articles", articleRoutes);


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    await sequelize.sync({ alter: true }); 
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
})();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});