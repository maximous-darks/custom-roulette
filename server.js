const express = require("express");
const path = require("path");
const app = express();

// Serve everything in public as static
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Example API endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Use Render port or fallback
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));