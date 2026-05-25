const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});