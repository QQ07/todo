const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())

const userRouter = require("./routes/user");
require("dotenv").config();
const PORT = process.env.PORT || 80;


app.use("/", userRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("running on PORT: " + PORT);
});
