const express = require("express");
const todos = require("../db/models");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Todos backend");
});
router.get("/allTodos", async (req, res) => {
  const all = await todos.find();
  console.log(all);
  res.send(all);
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  const todo = new todos(req.body);
  const msg = await todo.save();
  console.log(msg);
  res.json({ msg: "added" });
});

module.exports = router;
