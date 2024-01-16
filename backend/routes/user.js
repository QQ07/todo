const express = require("express");
const todos = require("../db/models");

const router = express.Router();

router.get("/",(req,res)=>{
  res.send("Todos backend")
})
router.get("/allTodos", async (req, res) => {
  const all = await todos.find();
  console.log(all);
  res.send(all);
});

router.get("/add", async (req, res) => {
  const newTodo = req.body();
  console.log(newTodo);

});

module.exports = router;
