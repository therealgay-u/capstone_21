
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
// 🔥 THIS LOADS .env


const app = express();
const PORT = 5000;

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running and MongoDB is connected");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
