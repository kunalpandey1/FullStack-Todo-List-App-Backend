const { Router } = require("express");

// All the Routes are defined here and their Specific Controller function are being called over here

const {
  getToDo,
  saveTodo,
  updateTodo,
  deleteTodo,
  deleteAll,
} = require("../controllers/TodoController");
const router = Router();

router.get("/", getToDo);
router.post("/save", saveTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);
router.post("/deleteAll", deleteAll);

module.exports = router;
