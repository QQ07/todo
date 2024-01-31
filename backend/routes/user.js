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
router.delete("/delete/:id", async (req, res) => {
  id = req.params.id;
  console.log(id);
  const msg = await todos.deleteOne({ _id: id });
  console.log(msg);
  res.send(msg);
});

router.put("/complete/:id", async (req, res) => {
  id = req.params.id;
  console.log(id);
  const msg = await todos.findByIdAndUpdate(id, {
    completed: true,
  });
  console.log(msg);
  res.send(msg);
});
router.put("/uncomplete/:id", async (req, res) => {
  id = req.params.id;
  console.log(id);
  const msg = await todos.findByIdAndUpdate(id, {
    completed: false,
  });
  console.log(msg);
  res.send(msg);
});

module.exports = router;
