const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./database");

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Router
app.use("/", require("./router/index.js"));
app.use("/api/notes", require("./router/notes.js"));
app.use("/api/users", require("./router/users.js"));

//Server on
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
