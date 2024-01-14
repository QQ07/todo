const express = require("express");
const todos = require("../db/models");

const router = express.Router();

router.get("/allTodos", async(req, res) => {
  const all =await todos.find();
  console.log(all)
  res.send(all);
});

router.add("/add", async(req,res)=>{
    const newTodo = req.body()
})

module.exports = router;