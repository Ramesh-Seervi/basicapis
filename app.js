// app.js
const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("E-commerce API is running...");
});

// About API
app.get("/about", (req, res) => {
  res.json({
    title: "About Us",
    content: "This is the About Us API for our e-commerce website."
  });
});

// Privacy Policy API
app.get("/privacy-policy", (req, res) => {
  res.json({
    title: "Privacy Policy",
    content: "Your privacy is important to us. This is a sample privacy policy."
  });
});

// Start server
const PORT = 10000; // any unused port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
