const express = require("express");
const path = require("path");
const app = express();

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "public")));

=======
// Serve everything in public as static
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html at root
>>>>>>> 1fb0384 (Update GD Level Roulette HTML and script)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

<<<<<<< HEAD
=======
// Example API endpoint
>>>>>>> 1fb0384 (Update GD Level Roulette HTML and script)
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
// Use Render port or fallback
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> 1fb0384 (Update GD Level Roulette HTML and script)
