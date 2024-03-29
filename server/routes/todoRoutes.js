const express = require("express");

const router = express.Router();

const {
  getTodos,
  getTodo,
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todoController");

// keep same paths at one place
router.route("/").get(getTodos).post(addTodo);

router.route("/:id").get(getTodo).put(editTodo).delete(deleteTodo);

module.exports = router;

// add a todo
// edit a todo
// delete a todo
// read all todo
