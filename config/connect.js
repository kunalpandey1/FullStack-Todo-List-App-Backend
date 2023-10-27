const mongoose = require("mongoose");

//Connecting to the MongoDB Database using ODM (Object Document Mapping) Mongoose

const connection_db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB);
    console.log(
      `Successfully Connected to MongoDB Database ${conn.connection.host}`
    );
  } catch (err) {
    console.log(`Something Went Wrong ${err}`);
  }
};

module.exports = connection_db;
