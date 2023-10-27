const ToDoModel = require("../Model/ToDoModel");
// All The Logic OF CRUD operation is here in controller File

const getToDo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

const saveTodo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
};
const updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => console.log(err));
};
const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

module.exports = {
  getToDo,
  saveTodo,
  updateTodo,
  deleteTodo,
};
