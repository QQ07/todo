const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors")
const app = express();
app.use(cors())
const userRouter = require("./routes/user");

app.use("/", userRouter);

app.listen(3000, (err) => {
  if (err) throw(err);
    console.log("http://localhost:3000")
});
