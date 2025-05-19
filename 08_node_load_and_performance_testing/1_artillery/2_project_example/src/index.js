import express from "express";

const app = express();
const PORT = 8080;

// Lightweight CPU-bound task
app.get("/operacion-simple", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 10000; i++) sum += i;
  res.json({ sum });
});

// Heavier CPU-bound task
app.get("/operacion-compleja", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 500000; i++) sum += i;
  res.json({ sum });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
