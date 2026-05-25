const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Root route (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Configurator backend is running 🚀");
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// IMPORTANT: Render port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});