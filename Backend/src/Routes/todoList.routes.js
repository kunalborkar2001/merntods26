// todoList.routes.js
const express = require("express");
const router = express.Router();
const todoListController = require("../Controller/controller.todoList");

router.use(express.json());

// Route for handling GET request

router.get('/', todoListController.getAllTodos);

router.post('/', todoListController.postRoute)

router.delete('/:id', todoListController.deleteTodo)

module.exports = router;