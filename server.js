
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("DevOps backend is running!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend is healthy",
  });
});

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
