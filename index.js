const express = require("express");
const app = express();
const PORT = 3000;

app.get("/hello", (req, res) => {
  const name = req.query.name || "stranger";
  res.send(`Hello, ${name}! Welcome to the Meetup!`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

