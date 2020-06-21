const mongoose = require("mongoose");

const URI = process.env.MONGOOSE_URI
  ? process.env.MONGOOSE_URI
  : "mongodb://localhost/merndatabase";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database is connect");
});
