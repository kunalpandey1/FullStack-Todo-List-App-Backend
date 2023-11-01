const express = require("express");
const connection_db = require("./config/connect");
const routes = require("./routes/TodoRoutes");
const cors = require("cors");
require("dotenv").config();

// calling the database connection file
connection_db();

const app = express();

const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

//endpoint
app.use("/todos", routes);

// creating a server
app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`);
});
