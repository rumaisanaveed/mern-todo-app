// import modules
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/connectDB");
const cors = require("cors");
const dotenv = require("dotenv").config();

// app
const app = express();

app.use(cors());

// db

connectDB();

// body parser

app.use(express.json());

// routes

app.use("/api/todos", require("./routes/todoRoutes"));

// middleware

app.use(errorHandler);

// port

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
