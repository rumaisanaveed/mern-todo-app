// for error handling of the async functions
const asyncHandler = require("express-async-handler");
const Todos = require("../models/todoModel");

// @desc Get all todos
// @route Get /api/todos
// @access public
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todos.find();
  res.status(200).json(todos);
});

// @desc Get a todo by id
// @route Get /api/todos/:id
// @access public
const getTodo = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }
  res.status(200).json(todo);
});

// @desc Create new totdo
// @route POST /api/todos
// @access public
const addTodo = asyncHandler(async (req, res) => {
  const { todo } = await req.body;
  console.log(todo);
  if (!todo) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const newTodo = Todos.create({
    todo,
  });
  res.status(201).json(newTodo);
});

// @desc Update a todo
// @route PUT /api/todos/:id
// @access public
const editTodo = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }
  const updatedTodo = await Todos.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTodo);
});

// @desc Delete a todo
// @route Get /api/todos/:id
// @access public
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todos.findByIdAndDelete(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }
  res.status(200).json(todo);
});

module.exports = {
  getTodos,
  getTodo,
  addTodo,
  editTodo,
  deleteTodo,
};
