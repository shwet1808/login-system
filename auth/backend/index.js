const express = require("express");
const app = express();
const cors = require("cors");
const AuthRouter = require("./Routers/AuthRouter");
const ProductRouter = require("./Routers/ProductRouter");

require("dotenv").config();

// Fix Mongoose strictQuery deprecation warning before requiring database connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// Connect to MongoDB
require("./Models/db");

const PORT = process.env.PORT || 8080;

// Root route
app.get("/", (req, res) => {
    res.send("It is working");
});

// Middleware
app.use(express.json()); // Use Express's built-in JSON parser (no need for body-parser)
app.use(cors());

// Routes
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
