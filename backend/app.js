const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const articlesRoutes = require("./routes/articles");

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use("/articles", articlesRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});