const express = require("express");
const cors = require("cors");

const data = require("./data.json");

const app = express();
const port = 8000;
// Use the CORS middleware
app.use(cors());

// Define a basic route
app.get("/", (req, res) => {
  const user = data.users[0];
  res.send(user);
});
app.get("/dashboard", (req, res) => {
  res.send(data);
});

// Start the server
app.listen(port, () => {
  //   console.log(Server is running on http://localhost:${port});
  console.log("Server is running");
});
