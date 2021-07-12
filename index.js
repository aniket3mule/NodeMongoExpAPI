const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
// import routes
const authRoutes = require("./routes/auth");

// middlewares
app.use(express.json()); // for body parser
// route middlewares
app.use("/api/user", authRoutes);
app.listen(3000, () => console.log("server is running..."));

// connect to db
const DB = process.env.DB_CONNECT;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => console.log("connected to db")
);