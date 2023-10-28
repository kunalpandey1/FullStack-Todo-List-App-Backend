const ToDoModel = require("../Model/ToDoModel");

const getToDo = async (req, res) => {
  try {
    const todo = await ToDoModel.find();
    res.send(todo);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const saveTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const data = await ToDoModel.create({ text });
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateTodo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    await ToDoModel.findByIdAndUpdate(_id, { text });
    res.send("Updated Successfully...");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;
    await ToDoModel.findByIdAndDelete(_id);
    res.send("Deleted Successfully...");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getToDo,
  saveTodo,
  updateTodo,
  deleteTodo,
};
