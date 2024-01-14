const express = require("express")
const mongoose = require("mongoose")
const app = express()
const userRouter = require("./routes/user")

app.use("/", userRouter);


app.listen(3000)