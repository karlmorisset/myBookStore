const express = require("express");
const path = require("path");
const cors = require("cors");

// let's create express app

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router
const bookRouter = require("./routes/bookRouter");
// const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");

app.use("/books", bookRouter);
// app.use("/users", userRouter);
app.use("/auth", authRouter);

// ready to export
module.exports = app;
